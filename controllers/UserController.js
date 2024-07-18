import { User } from "../models/index.js";

class UserController {
  async getCurrent(req, res) {
    try {
      const user = await User.findById(req.decodedData.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const userController = new UserController();
