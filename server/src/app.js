import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import creditRoutes from "./routes/credits.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.use("/api/user", userRoutes);
app.use("/api/credits", creditRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});
export default app;
