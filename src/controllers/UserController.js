import User from "../models/User";

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["id", "username", "email"],
      });
      return res.json(users);
    } catch (e) {
      return res.status(500).json(null);
    }
  }

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
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ["User not found."],
        });
      }

      const { id, username, email } = user;

      return res.json({ id, username, email });
    } catch (e) {
      return res.status(500).json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ["User not found."],
        });
      }

      const updatedUser = await user.update(req.body);

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
      const user = await User.findByPk(req.params.id);

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
