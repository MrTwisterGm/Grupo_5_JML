const express = require('express');
const app = express();
const path = require('path');
const productRoutes = require('../src/routes/product');

app.use(express.static(path.resolve(__dirname,"../public")));

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views")); // LE INDICAMOS QUE COMO MOTOR DE VISTA UTILIZAREMOS EJS

app.use("/", productRoutes);

app.get("/container-register",(req,res)=> res.render("register"));

app.get("/container-login",(req,res)=> res.render("login"));

app.use("/products", productRoutes);

app.get("/productCart",(req,res)=> res.render("productCart"));

app.get("/newProduct",(req,res)=> res.render("newProduct"));

app.listen(3000,() => console.log("Server on http://localhost:3000"));