/* eslint-disable object-curly-newline */
import multer from "multer";

import Photo from "../models/Photo";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single("src");

class PhotoController {
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
