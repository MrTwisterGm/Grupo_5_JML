const express = require('express');
const app = express();
const path = require('path');
const productRoutes = require('../src/routes/product');
const userRoutes = require("../src/routes/user")

app.use(express.static(path.resolve(__dirname,"../public")));

app.set("views",path.join(__dirname,"views")); // LE INDICAMOS QUE COMO MOTOR DE VISTA UTILIZAREMOS EJS

app.set("view engine","ejs");

app.use("/", productRoutes);

app.use("/products", productRoutes);

app.use("/user", userRoutes);

app.listen(3000,() => console.log("Server on http://localhost:3000"));