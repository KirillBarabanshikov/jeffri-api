import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import {
  authRouter,
  farmRouter,
  tasksRouter,
  usersRouter,
} from "./routers/index.js";
import { authMiddleware } from "./middlewares/index.js";

dotenv.config();
const port = process.env.PORT || 5000;
const connection = process.env.DB_CONNECTION;

const app = express();
app
  .use(express.json())
  .use("/api/auth", authRouter)
  .use("/api/users", authMiddleware, usersRouter)
  .use("/api/tasks", authMiddleware, tasksRouter)
  .use("/api/farm", authMiddleware, farmRouter);

async function start() {
  try {
    await mongoose.connect(connection);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();
