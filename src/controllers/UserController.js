import User from "../models/User";
import Photo from "../models/Photo";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      const { id, username, email } = newUser;

      return res.json({ id, username, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        attributes: ["id", "username", "email"],
        order: [[Photo, "id", "DESC"]],
        include: {
          model: Photo,
          attributes: { exclude: ["created_at", "updated_at"] },
        },
      });

      if (!user) {
        return res.status(404).json({
          errors: ["User not found."],
        });
      }

      return res.json(user);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ["User not found."],
        });
      }

      const updatedUser = await user.update(req.body);
      console.log(req.body);

      const { id, username, email } = updatedUser;

      return res.json({ id, username, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ["User not found."],
        });
      }

      await user.destroy();

      return res.json({ response: "User deleted." });
    } catch (e) {
      return res.status(500).json(null);
    }
  }
}

export default new UserController();
