  
const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const multer = require('multer');
const path = require('path');

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        
            cb(null, path.resolve(__dirname,"../../public/uploads","products"))
        
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})
const upload = multer({storage:dest});



router.get("/", product.allproducts)

router.get("/detail",product.detail)

router.get("/create",product.create)
router.post("/create",upload.single("filename"),product.save)

router.get("/search",product.search)


router.get("/edit/:id",product.edit)
router.put("/update/:id",upload.any(),product.update)

router.delete("/delete/:id",product.delete) 


module.exports = router