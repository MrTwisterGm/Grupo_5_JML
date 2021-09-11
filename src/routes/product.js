  
const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const multer = require('multer');
const path = require('path');
const { home } = require('../controllers/main');
let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf("jpg") > 0){
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});



router.get("/allproducts", product.allproducts)

router.get("/detail",product.show)

router.get("/create",product.create)

//router.get("/:id",product.show) NO TIENE VISTA

//router.get("/edit/:id",product.edit) NO TIENE VISTA

//router.post("/save",[upload.single("image")],product.save) NO TIENE VISTA

//router.put("/update/:id",[upload.single("image")],product.update) NO TIENE VISTA

//router.delete("/delete/:id",product.delete) NO TIENE VISTA

router.get("/cart", product.cart);

module.exports = router