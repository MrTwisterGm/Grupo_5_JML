const express = require('express');
const router = express.Router();
const userApi = require("../../controllers/apisControllers/usersApiController")



router.get("/list", userApi.list);

router.get("/detail/:id", userApi.show);



module.exports = router