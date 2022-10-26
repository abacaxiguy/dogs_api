import { Router } from "express";
import CommentController from "../controllers/CommentController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/:id", loginRequired, CommentController.store);
router.get("/:id", CommentController.show);

export default router;
