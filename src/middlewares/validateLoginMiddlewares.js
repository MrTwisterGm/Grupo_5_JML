const { check } = require("express-validator");

module.exports = [
    check('email').isEmail().withMessage('Debes completar el campo con tu E-Mail'),
    check('password').notEmpty().withMessage('Debes ingresar una contraseña')
];