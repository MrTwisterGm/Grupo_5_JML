const bcryptjs = require("bcryptjs"); // hashea la password
const { validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");
const cookie = cookieParser;
const db = require("../../database/models/index");

module.exports = {
  login: (req, res) => {
    res.render("login");
  },

  loginProcess: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    }).then(function (user) {
      if (
        user &&
        bcryptjs.compareSync(toString(req.body.password), user.password)
      ) {
        req.session.user = {
          email: req.body.email,
          name: req.body.name,
          lastName: req.body.lastName,
          password: bcryptjs.hashSync(toString(req.body.password), 10),
          avatar: req.file.filename,
        };
        if (req.body.remember_user != undefined) {
          res.cookie("remember_user", req.session.user.id, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
          });
        }
        return res.redirect("/");
      }
    });
  },

  profile: (req, res) => {
    db.Users.findByPk(req.params.id)
      .then(function (user) {
        return res.render("profile", { user });
      })
      .catch((error) => console.log(error));
  },

  logout: (req, res) => {
    req.session.user = undefined;
    res.cookie("remember_user", undefined, { maxAge: 0 });
    res.redirect("/");
  },

  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.isEmpty()) {
      db.Users.create({
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        password: bcryptjs.hashSync(toString(req.body.password), 10),
        avatar: req.file.filename
      }).then(function (users) {
        res.redirect("/");
      });
    } else {
      return res.render("home");
    }
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
  
  list: (req, res) => {
  db.Users.findAll()
      .then(users => {
        return res.json({
          total: users.length,
          data: movies,
          status: 200
        })
      })
  },

  show: (req, res) => {
    db.Users.findByPk(req.params.id)
      .then(users => {
        return res.json({
          data: movie,
          status: 200
        })
      })
  },
};

