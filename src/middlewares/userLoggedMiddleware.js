const db = require('../../database/models');
const { Op } = require("sequelize");
const sequelize = db.sequelize;


module.exports = function(req, res, next) {
    if(typeof userToLogin != 'undefined') {
        res.locals.userLogged = req.session.userLogged
    } else if (typeof req.cookies.remember_user != 'undefined') {
            db.Users.findByPk(req.cookies.remember_user)
            .then(function(resultado){
                res.locals.userLogged = resultado;
                req.session.userLogged = resultado;
            }).catch(function(e){
               res.render(e)
            })
        }
    

        next()
    }
    
    
    
    
    
    
    
    // async function userLoggedMiddleware(req, res, next) {
        //     res.locals.isLogged = false;
        
        //     let emailInCookie = req.cookies.email;
        //     let userFromCookie = await db.Users.findOne({
            //          where:{
                //             email:{[Op.like]:emailInCookie}
                //         }})
                
                //     if(userFromCookie){
                    //         req.session.userLogged = userFromCookie;    
                    //     }
                    
                    //     if (req.session.userLogged) {
                        //         res.locals.isLogged = true;
                        // 		res.locals.userLogged = req.session.userLogged;
                        //     } 
                        
                        //     next();
                        
                        // }
                        
                        // module.exports = userLoggedMiddleware;