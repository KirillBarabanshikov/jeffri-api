import express from "express";
import { userController } from "../controllers/index.js";

export const usersRouter = express.Router();

usersRouter.post("/", userController.create);
