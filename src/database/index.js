/* eslint-disable comma-dangle */
import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../models/User";
import Photo from "../models/Photo";
import Comment from "../models/Comment";

const models = [User, Photo, Comment];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
