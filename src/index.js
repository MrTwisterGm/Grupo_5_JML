const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","home.ejs")))

app.get("/container-register",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","register.ejs")))

app.get("/container-login",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","login.ejs")))

app.get("/products",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","productDetail.ejs")))

app.get("/productCart",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","productCart.ejs")))

app.listen(3000,() => console.log("Server on http://localhost:3000"));