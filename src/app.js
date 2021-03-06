const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override"); // PARA USAR PUT Y DELETE
const productRoutes = require('./routes/product');
const userRoutes = require("./routes/user");
const session = require("express-session"); //SESSION (middleware a nivel de aplicacion(global))
const cookieParser = require("cookie-parser"); //COOKIES

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const mainrouter = require("./routes/main");
const apiProducts = require("./routes/apis/products")
const apiUsers = require("./routes/apis/users")



app.use(express.urlencoded({extended: false}));
app.use(express.json()); // esto es para interpretar la info que viaja en los formularios vía POST -
// cuando no encuentra el req.body == undefined es por el orden de estos middlewares
app.use(cookieParser());
app.use(methodOverride("_method")); // para put y delete en la action del form le ponemos action="RUTA?_method=put o delete"


app.use(userLoggedMiddleware);

app.use(session({secret:"shhh, es un secreto", resave: true,
saveUninitialized: true})); // para utilizar session



app.use(express.static(path.resolve(__dirname,"../public")));

app.set("views",path.join(__dirname,"views")); 

app.set("view engine","ejs");

app.use("/", mainrouter);

app.use("/products", productRoutes);

app.use("/user", userRoutes);

app.use("/apiProducts", apiProducts);

app.use("/apiUsers", apiUsers);

app.listen(3001,() => console.log("Server on http://localhost:3001"));