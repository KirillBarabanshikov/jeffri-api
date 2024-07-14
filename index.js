import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { tasksRouter, usersRouter } from "./routers/index.js";

dotenv.config();
const port = process.env.PORT;
const connection = process.env.DB_CONNECTION;

const app = express();
app
  .use(express.json())
  .use("/api/users", usersRouter)
  .use("/api/tasks", tasksRouter);

async function start() {
  try {
    await mongoose.connect(connection);
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

start();
