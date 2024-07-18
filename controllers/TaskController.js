import { Task, User } from "../models/index.js";

class TaskController {
  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json("OK");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: "after" },
      );
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const tasks = await Task.find({});
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async perform(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      const user = await User.findById(req.decodedData.id);
      user.completedTasks.push(task._id);
      user.balance += task.price;
      await user.save();
      res.status(200).json("OK");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const taskController = new TaskController();
