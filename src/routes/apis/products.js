const express = require('express');
const router = express.Router();
const productsApi = require("../../controllers/apisControllers/productsApiController")

router.get("/list", productsApi.list);

router.get("/detail/:id", productsApi.show);

router.get("/total", productsApi.total)

router.get("/categories", productsApi.categories)

router.get("/totalCategories", productsApi.totalCategories)

module.exports = router