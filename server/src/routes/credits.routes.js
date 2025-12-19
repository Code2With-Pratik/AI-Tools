import { Router } from "express";
import prisma from "../prisma/client.js";
import { requireAuth, getAuth } from "@clerk/express";

const router = Router();

/**
 * GET /api/credits
 * Returns current user's credits
 */
router.get("/", requireAuth(), async (req, res) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { credits: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ credits: user.credits });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /api/credits/consume
 * Body: { tool: string, cost: number }
 */
router.post("/consume", requireAuth(), async (req, res) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const { tool, cost } = req.body;
    if (!tool || typeof cost !== "number" || cost <= 0) {
      return res.status(400).json({ message: "Invalid payload" });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { id: true, credits: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.credits < cost) {
      return res.status(400).json({ message: "Insufficient credits" });
    }

    // transaction = safe update + usage insert
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { credits: { decrement: cost } },
      }),
      prisma.usage.create({
        data: { tool, cost, userId: user.id },
      }),
    ]);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/credits/usage
 * Returns usage history
 */
router.get("/usage", requireAuth(), async (req, res) => {
  try {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const usage = await prisma.usage.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    res.json(usage);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
