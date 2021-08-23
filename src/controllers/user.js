const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
const user = require('../models/user');
const bcryptjs = require("bcryptjs");

module.exports = {
    login: (req,res) => {
res.render("login")
    },
    loginProcess: (req,res) => {
        let userToLogin = user.findField("email", req.body.email);
        if(userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                return res.send("Ok puede ingresar")
            }
            return res.render("register", {
                errors: {
                    email: {
                        msg: "Las credenciales son invalidas"
                    }
                }
            });

        }
        return res.render("login", {
            errors: {
                email: {
                    msg: "No se encuentra el email"
                }
            }
        });
    },
    register: (req,res) => {
        res.render("register")
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render("register",{
                errors:resultValidation.mapped(),
                oldData: req.body
            }
        );
    }
    let userInDb = user.findField("email",req.body.email);
    if(userInDb){
        return res.render("register", {
            errors: {
                email: {
                    msg: "Este email ya esta registrado"
                }
            },
            oldData: req.body
        });
    }


    let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
    }
   let userCreated = user.create(userToCreate);
   return res.redirect("/user/login");
}

}