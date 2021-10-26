/* eslint-disable comma-dangle */
import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        allowNull: false,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
