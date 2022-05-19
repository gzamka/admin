import express from "express";
import {
  getCategories,
  subscribeEmail,
  loginPost,
  checkValidate,
} from "../controller/controller.js";

const router = express.Router();

// ROUTER/////////////////////////////////////////// ROUTER
router.route("/").get(getCategories).post(subscribeEmail);
router.route("/login").post(loginPost);
router.route("/validate").get(checkValidate);

// router.route('/storage').get(saveStorageData);

export default router;
