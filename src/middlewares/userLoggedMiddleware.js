const db = require('../../database/models');


module.exports = function(req, res, next) {
    res.locals.userLogged = false;
    if(typeof userToLogin != 'undefined') {
        res.locals.userLogged = req.session.userLogged
        res.locals.userLogged = true;
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

// function userLoggedMiddleware(req, res, next) {
//     res.locals.isLogged = false;
    
//     let emailInCookie = req.cookies.email;
//     let userFromCookie = db.Users.findByPk("email", emailInCookie);
    
//     if (userFromCookie) {
//         userToLogin = userFromCookie
//     }
    
//     if (userToLogin) {
//         res.locals.isLogged = true;
//         res.locals.userLogged = userToLogin;
//     }
    
//     next();
    
    
// }

// module.exports = userLoggedMiddleware;