const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const uploadFile = require("../middlewares/multerMiddleware");
const multer =require ("multer");
const path = require ("path");

const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");



router.get("/register", guestMiddleware, user.register);

router.post("/register",uploadFile.single("avatar"),user.processRegister);

router.get("/login", guestMiddleware, user.login);

router.post("/login",user.loginProcess);

// Perfil de Usuario
// routes.get("/profile/", authMiddleware, user.profile);

// logout
// routes.get("/logout/", user.logout);



module.exports = router