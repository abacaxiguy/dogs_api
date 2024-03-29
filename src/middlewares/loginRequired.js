import jwt from "jsonwebtoken";
import User from "../models/User";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required."],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, username } = payload;

    const user = await User.findOne({
      where: { id, username },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Invalid user."],
      });
    }

    req.userId = id;
    req.userUsername = username;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ["Expired or invalid token."],
    });
  }
};
