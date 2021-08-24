const product = require("../models/product");
const color = require("../models/color");
const brand = require("../models/brand");
const user = require("../models/user");
const bcryptjs = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");
const mainController = require("./main");

// const controller = {
//   register: (req, res) => {
//     return res.render("userRegisterForm");
//   },

module.exports = {
  login: (req, res) => {
    res.render("login");
  },
  
  loginProcess: (req, res) => {
    
    let userToLogin = user.findField("email", req.body.email);
    
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        toString(req.body.password),
        userToLogin.password
        );
        
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          
          if(req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: ( 1000 * 60) *60} )
          }
          
          return res.send("Ok puede ingresar");
          /* return res.redirect("/user/profile"); */
        } 
        
        
        
        return res.render("login", {
          errors: {
            email: {
              msg: "Las credenciales son inválidas"
            },
          },
        });
      }  
      
      return res.render("login", {
        errors: {
          email: {
            msg: "No se encuentra el email",
          },
        },
      });
    },    
    
    
    // return res.render("userLoginForm", {
      //    errores: {
        //        email: {
          //            msg: "No se encuentra este email en nuestra base de datos"
          //          }
          //        }
          //      }),
          
          profile: (req, res) => {
            
            console.log(req.cookie.userEmail);
            
            return res.render("userProfile", {
              user: req.session.userLogged
            });
          },

          logout: (req, res) => {
            res.clearCookie("userEmail");
            req.session.destroy();
            return res.redirect("/");
          }
          
        }

    //   return res.render("register", {
    //     errors: {
    //       email: {
    //         msg: "Las credenciales son invalidas",
    //       },
    //     },
    //   });
    // },
    
         
    
    
    
    register: (req, res) => {
      res.render("register");
    },
    processRegister: (req, res) => {
      const resultValidation = validationResult(req);
      
      if (resultValidation.length > 0) {
        return res.render("register", {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      }
      let userInDb = user.findField("email", req.body.email);
      if (userInDb) {
        return res.render("register", {
          errors: {
            email: {
              msg: "Este email ya esta registrado",
            },
          },
          oldData: req.body,
        });
      }
      
      
      
      
      
      let userToCreate = {
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        password: bcryptjs.hashSync(toString(req.body.password), 10),
        avatar: req.file.filename
      };
      let userCreated = user.create(userToCreate);
      return res.redirect("/user/login");
    },
  }  
};
  
  
  

// module.exports = controller;