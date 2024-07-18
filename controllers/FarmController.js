import { User } from "../models/index.js";

class FarmController {
  async start(req, res) {
    try {
      const user = await User.findById(req.decodedData.id);
      user.timer = Date.now();
      await user.save();
      res.status(200).json("OK");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const farmController = new FarmController();
