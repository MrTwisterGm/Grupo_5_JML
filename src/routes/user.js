const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
const uploadFile = require("../middlewares/multerMiddleware");



router.get("/login",user.login);

router.post("/login",user.loginProcess);

router.get("/register",user.register);

router.post("/register",uploadFile.single("avatar"),user.processRegister);

module.exports = router