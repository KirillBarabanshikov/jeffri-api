import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Task = mongoose.model("Task", taskSchema);
