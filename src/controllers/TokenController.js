import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { username = "", password = "" } = req.body;

    if (!username || !password) {
      return res.status(401).json({
        errors: ["Invalid data."],
      });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({
        errors: ["User not found."],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Invalid password."],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, username }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
