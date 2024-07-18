import express from "express";
import { userController } from "../controllers/index.js";

export const usersRouter = express.Router();

usersRouter.get("/current", userController.getCurrent);
