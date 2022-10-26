class HomeController {
  async index(req, res) {
    res.json("Dogs API");
  }
}

export default new HomeController();
