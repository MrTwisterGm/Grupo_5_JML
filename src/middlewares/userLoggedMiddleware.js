const db = require('../../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = await db.Users.findOne({
         where:{
            email:{[Op.like]:emailInCookie}
        }}).catch((error) => console.log(error));
        
    if(userFromCookie){
        req.session.userLogged = userFromCookie;    
    }

    // if (req.session.userLogged) {
    //     res.locals.isLogged = true;
	// 	res.locals.userLogged = req.session.userLogged;
    // } 

    next();

}

module.exports = userLoggedMiddleware;