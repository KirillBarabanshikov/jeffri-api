import { User } from "../models/index.js";

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(200).json(error);
    }
  }
}

export const userController = new UserController();
