import prisma from "../lib/prisma.js";

/**
 * Generate article AI tool
 * Cost: 10 credits
 */
export const generateArticle = async (req, res) => {
  try {
    const userId = req.auth.userId; // Clerk userId

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    // 1️⃣ Find user
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2️⃣ Check credits
    const COST = 10;
    if (user.credits < COST) {
      return res.status(403).json({ message: "Not enough credits" });
    }

    // 3️⃣ Transaction: deduct credits + save usage
    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: {
          credits: {
            decrement: COST,
          },
        },
      }),
      prisma.usage.create({
        data: {
          userId: user.id,
          tool: "Write Article",
          cost: COST,
        },
      }),
        ]);
    
        return res.status(200).json({ message: "Article generated successfully" });
      } catch (error) {
        console.error("Error generating article:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    };