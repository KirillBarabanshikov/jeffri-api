import express from "express";
import { farmController } from "../controllers/index.js";

export const farmRouter = express.Router();

farmRouter.post("/start", farmController.start);
