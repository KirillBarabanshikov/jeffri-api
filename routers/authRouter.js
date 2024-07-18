import express from "express";
import { authController } from "../controllers/index.js";

export const authRouter = express.Router();

authRouter.post("/registration", authController.registration);
