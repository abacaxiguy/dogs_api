import Sequelize, { Model } from "sequelize";

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        author: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Author can not be empty.",
            },
          },
        },
        title: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 30],
              msg: "Title must be between 3 and 30 characters.",
            },
          },
        },
        date: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Date can not be empty.",
            },
          },
        },
        src: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Source can not be empty.",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.getDataValue("src");
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Weight has to be a float number.",
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Age has to be a integer number.",
            },
          },
        },
        views: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: "Views has to be a integer number.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "photos",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "author" });
    this.hasMany(models.Comment, { foreignKey: "comment_photo" });
  }
}
