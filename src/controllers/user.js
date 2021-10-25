const bcryptjs = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { Op, and } = require("sequelize")



module.exports = {
  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);
  
    if (resultValidation.isEmpty()) {
      db.Users.create({
        email: req.body.email,
        name: req.body.name,
        last_name: req.body.last_name,
        password: bcryptjs.hashSync(toString(req.body.password), 10),
        avatar: req.file.filename
      }).then(function (users) {
        // req.session.userLogged = users
        res.redirect("/user/login");
      }).catch((error) => console.log(error));
    } else {
      return res.redirect("/");
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  loginProcess:  (req, res) => {
     db.Users.findOne({
        where: {
            email:   req.body.email 
        }
    }).then(function(userToLogin){

      if (userToLogin && bcryptjs.compareSync(toString(req.body.password), userToLogin.password)) {
          // let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
          // if (isOkThePassword) {
              // delete userToLogin.password;
              req.session.userLogged = userToLogin;
              // res.send(userToLogin)
              if (req.body.remember_user) {
                  res.cookie('email', req.body.email, { maxAge: 5 * 60 * 1000 }); //probamos otra opcion 'email'
              }
  
              return res.render('home');
          // } 
      }
    })

},

  profile: (req, res) => {
    db.Users.findByPk(req.params.id)
      .then(function (user) {
        return res.render("profile", { user: req.session.userLogged });
      })
      .catch((error) => console.log(error));
  },

  edit: function (req, res) {
    db.Users.findByPk(req.params.id)
      .then(function (user) {
        return res.render("updateUser", { user });
      })
      .catch((error) => console.log(error));
  },

  update: function (req, res) {
    db.Users.findByPk(req.params.id).then(function (user) {
      db.Users.update(
        {
          email: req.body.email,
          name: req.body.name,
          lastName: req.body.lastName,
          password: bcryptjs.hashSync(toString(req.body.password), 10),
          avatar: req.file.filename
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(function (user) {
        return res.redirect("profile" + req.session.user.id);
      });
    });
  },
  logout: (req, res) => {
    req.session.userLogged = undefined;
    res.cookie("remember_user", undefined, { maxAge: 0 });
    res.redirect("/");
  },
  
  contact: function (req, res) {
    res.render("contacto")

  
 
}

};

