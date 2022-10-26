import { Router } from "express";
import PhotoController from "../controllers/PhotoController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, PhotoController.store);
router.get("/", PhotoController.index);
router.get("/:id", PhotoController.show);
router.delete("/:id", loginRequired, PhotoController.delete);

export default router;
