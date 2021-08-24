const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const uploadFile = require("../middlewares/multerMiddleware");
const multer =require ("multer");
const path = require ("path");



router.get("/login",user.login);

router.post("/login",user.loginProcess);

router.get("/register",user.register);

router.post("/register",uploadFile.single("avatar"),user.processRegister);

// routes.get("/profile", usersController.profile);



module.exports = router