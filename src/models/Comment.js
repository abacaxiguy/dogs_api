/* eslint-disable comma-dangle */
import Sequelize, { Model } from "sequelize";

export default class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        comment_author: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Comment author can not be empty.",
            },
          },
        },
        comment_photo: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Comment photo can not be empty.",
            },
          },
        },
        comment_content: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Comment can not be empty.",
            },
          },
        },
        comment_date: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Comment date can not be empty.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "comments",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "comment_author" });
    this.belongsTo(models.Photo, { foreignKey: "comment_photo" });
  }
}
