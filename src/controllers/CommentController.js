/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import Comment from "../models/Comment";

class CommentController {
  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(404).json({
          errors: ["Missing ID"],
        });
      }

      const comments = await Comment.findAll({
        where: { comment_photo: req.params.id },
        attributes: [
          "id",
          "comment_author",
          "comment_photo",
          "comment_content",
          "comment_date",
        ],
      });

      return res.json(comments);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const { comment_content } = req.body;
      const comment_author = req.userUsername;
      const comment_photo = req.params.id;

      if (!comment_author) {
        return res.status(400).json({
          errors: ["Login required."],
        });
      }

      if (!comment_photo) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const comment = await Comment.create({
        comment_author,
        comment_photo,
        comment_content,
        comment_date: Date.now(),
      });

      const { id, comment_date } = comment;
      return res.json({
        id,
        comment_author,
        comment_photo,
        comment_content,
        comment_date,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CommentController();
