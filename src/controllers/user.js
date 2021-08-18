const product = require('../models/product');
const color = require('../models/color');
const brand = require('../models/brand');
module.exports = {
    login: (req,res) => {
res.render("login")
    },
    register: (req,res) => {
        res.render("register")
    }

}