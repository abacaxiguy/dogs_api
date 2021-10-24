class HomeController {
  index(req, res) {
    res.json({
      tudocerto: "dale",
    });
  }
}

export default new HomeController();
