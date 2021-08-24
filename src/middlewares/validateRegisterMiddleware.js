const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("nombre").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("apellido").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un email").bail().isEmail().withMessage("Debes escribir un email valido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña "),
    body("avatar").custom((values, {req}) => {
        let file = req.file;
        let acceptedExtensions = [".jpg",".png",".gif"];

        if(!file){
            throw new Error("Tienes que subir una imagen");
    }   else{
        let fileExtension = path.extname(file.originalname);
        if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(", ")}`);
        }
    }
    return true;
})
];
const validateLogin = [
    body('email').isEmail().withMessage('Debes completar el campo con tu E-Mail'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
];

    