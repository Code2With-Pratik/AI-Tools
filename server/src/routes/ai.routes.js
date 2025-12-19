import express from "express";
import { requireAuth } from "../middleware/auth.js";
import { generateArticle } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/article", requireAuth, generateArticle);

export default router;
