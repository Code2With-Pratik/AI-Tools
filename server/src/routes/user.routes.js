import express from "express";
import prisma from "../prisma/client.js";
import { requireAuth } from "../middleware/clerkAuth.js";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { syncUser } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * Sync Clerk user to DB
 */
router.post("/sync", requireAuth, async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    // 1️⃣ Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (existingUser) {
      return res.json(existingUser);
    }

    // 2️⃣ Fetch user from Clerk
    const clerkUser = await clerkClient.users.getUser(clerkUserId);

    // 3️⃣ Create user in DB
    const newUser = await prisma.user.create({
      data: {
        clerkId: clerkUserId,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`,
        credits: 500,
      },
    });

    res.json(newUser);
  } catch (error) {
    console.error("USER SYNC ERROR:", error);
    res.status(500).json({ message: "User sync failed" });
  }
});

export default router;
