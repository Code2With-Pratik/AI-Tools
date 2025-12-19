import prisma from "../lib/prisma.js";

export const syncUser = async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;

    if (!clerkId || !email) {
      return res.status(400).json({ message: "Missing user data" });
    }

    let user = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          email,
          name,
          credits: 500,
        },
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("User sync failed:", error);
    return res.status(500).json({ message: "User sync failed" });
  }
};
