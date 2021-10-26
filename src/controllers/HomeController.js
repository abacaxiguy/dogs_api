import User from "../models/User";

class HomeController {
  async index(req, res) {
    const newUser = await User.create({
      username: "joao",
      email: "joao@alo.com",
      password_hash: "what",
    });
    res.json(newUser);
  }
}

export default new HomeController();
