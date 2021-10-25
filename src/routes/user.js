const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const uploadFile = require("../middlewares/multerMiddleware");

const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");



router.get("/register", user.register);

router.post("/register",uploadFile.single("avatar"),user.processRegister);

router.get("/login", guestMiddleware, user.login);

router.post("/login",user.loginProcess);

// Perfil de Usuario
router.get("/profile", authMiddleware, user.profile);

// logout
router.get("/logout",authMiddleware, user.logout);

router.get("/update",authMiddleware, user.edit);

router.post("/update", user.update);

router.get("/contact", user.contact);

module.exports = router