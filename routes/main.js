const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const notepadsController = require("../controllers/notepads");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/notepads", ensureAuth, notepadsController.getNotepads);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;