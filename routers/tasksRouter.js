import express from "express";
import { taskController } from "../controllers/index.js";

export const tasksRouter = express.Router();

tasksRouter.post("/", taskController.create);

tasksRouter.get("/", taskController.getAll);

tasksRouter.delete("/:id", taskController.delete);

tasksRouter.patch("/:id", taskController.update);

tasksRouter.post("/:id/perform", taskController.perform);
