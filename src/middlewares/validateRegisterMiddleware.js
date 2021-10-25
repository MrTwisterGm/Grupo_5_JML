const path = require("path");
const { check } = require("express-validator");

module.exports = [
    check("name").notEmpty().withMessage("Tienes que escribir un nombre"),
    check("last_name").notEmpty().withMessage("Tienes que escribir un apellido"),
    check("email").notEmpty().withMessage("Tienes que escribir un email").isEmail().withMessage("Debes escribir un email valido"),
    check("password").notEmpty().withMessage("Tienes que escribir una contraseña "),
    // body("avatar").custom((values, {req}) => {
    //     let file = req.file;
    //     let acceptedExtensions = [".jpg",".png",".gif"];

    //     if(!file){
    //         throw new Error("Tienes que subir una imagen");
    // }   else{
    //     let fileExtension = path.extname(file.originalname);
    //     if(!acceptedExtensions.includes(fileExtension)){
    //         throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(", ")}`);
    //     }
    // }
    // return true;
// })
];


    /*   */ 