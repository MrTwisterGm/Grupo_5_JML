const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,"./public")));

app.get("/",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","home.html")))

app.get("/container-register",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","register.html")))

app.get("/container-login",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","login.html")))

app.get("/products",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","productDetail.html")))

app.get("/productCart",(req,res)=> res.sendFile(path.resolve(__dirname,"./src/views","productCart.html")))

app.listen(3000,() => console.log("Server on http://localhost:3000"));