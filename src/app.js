/* eslint-disable import/first */
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import photoRoutes from "./routes/photoRoutes";
import commentRoutes from "./routes/commentRoutes";

const whiteList = process.env.WHITELIST;

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/photos/", photoRoutes);
    this.app.use("/comments/", commentRoutes);
  }
}

export default new App().app;
