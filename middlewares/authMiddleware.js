import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "forbidden" });
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    req.decodedData = decodedData;
    next();
  } catch (e) {
    return res.status(403).json({ message: "forbidden" });
  }
}
