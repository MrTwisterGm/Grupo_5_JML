const express = require('express');
const app = express.Router();
const path = require('path');
​
app.get("/",(req,res) => res.render(path.resolve(__dirname,"../views","home.html")))
​
app.get("/detail",(req,res) => res.rebder(path.resolve(__dirname,"../views","productDetail.html")))

module.exports = app;