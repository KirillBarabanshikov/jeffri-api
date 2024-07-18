import { User } from "../models/index.js";
import { generateAccessToken } from "../utils/index.js";

class AuthController {
  async registration(req, res) {
    try {
      const user = await User.create(req.body);
      const token = generateAccessToken(user._id);
      res.status(200).json({ token, type: "Bearer" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const authController = new AuthController();
