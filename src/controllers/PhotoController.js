/* eslint-disable object-curly-newline */
import multer from "multer";
import Sequelize from "sequelize";

import Photo from "../models/Photo";
import Comment from "../models/Comment";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("src");

class PhotoController {
  async index(req, res) {
    try {
      const photos = await Photo.findAll({
        attributes: {
          exclude: ["created_at", "updated_at"],
          include: [
            [
              Sequelize.fn("COUNT", Sequelize.col("Comments.id")),
              "comment_count",
            ],
          ],
        },
        order: [["id", "DESC"]],
        include: {
          model: Comment,
          attributes: [],
        },
        group: [
          "Photo.id",
          "Photo.author",
          "Photo.title",
          "Photo.date",
          "Photo.src",
          "Photo.weight",
          "Photo.age",
          "Photo.views",
        ],
      });
      return res.json(photos);
    } catch (e) {
      return res.status(400).json({
        errors: e,
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
          "url",
          "weight",
          "age",
          "views",
        ],
        order: [
          ["id", "DESC"],
          [Comment, "id", "DESC"],
        ],
        include: {
          model: Comment,
          attributes: { exclude: ["created_at", "updated_at"] },
        },
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

      if (photo.author !== req.userUsername) {
        return res.status(400).json({
          errors: ["Login required."],
        });
      }

      await photo.destroy();

      return res.json({ message: "Photo deleted successfully" });
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
        const src = req.file.path;

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

        const { id, author, date, views, url } = photo;
        return res.json({ id, author, title, weight, age, url, date, views });
      } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    });
  }
}

export default new PhotoController();
