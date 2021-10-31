/* eslint-disable object-curly-newline */
import multer from "multer";

import Photo from "../models/Photo";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("src");

class PhotoController {
  async index(req, res) {
    try {
      const photos = await Photo.findAll({
        attributes: [
          "id",
          "author",
          "title",
          "date",
          "src",
          "weight",
          "age",
          "views",
        ],
        order: [
          ["id", "DESC"],
          // [Comment, "id", "DESC"],
        ],
        // include: {
        //   model: Comment,
        //   attributes: ["comment_count"],
        // },
      });
      return res.json(photos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const photo = await Photo.findByPk(req.params.id, {
        attributes: [
          "id",
          "author",
          "title",
          "date",
          "src",
          "weight",
          "age",
          "views",
        ],
        order: [
          ["id", "DESC"],
          // [Comment, "id", "DESC"],
        ],
        // include: {
        //   model: Comment,
        //   attributes: ["comment_count"],
        // },
      });

      if (!photo) {
        return res.status(404).json({
          errors: ["Photo does not exist."],
        });
      }

      return res.json(photo);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing ID"],
        });
      }

      const photo = await Photo.findByPk(req.params.id);

      if (!photo) {
        return res.status(404).json({
          errors: ["Photo does not exist."],
        });
      }

      await photo.destroy();

      return res.json({ message: "User deleted successfully" });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { title, weight, age } = req.body;
        const username = req.userUsername;
        const src = req.file.filename;

        if (!username) {
          return res.status(400).json({
            errors: ["Login required."],
          });
        }

        const photo = await Photo.create({
          author: username,
          date: Date.now(),
          title,
          src,
          weight,
          age,
        });

        const { id, author, date, views } = photo;
        return res.json({ id, author, title, weight, age, src, date, views });
      } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new PhotoController();
