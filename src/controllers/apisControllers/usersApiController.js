const db = require("../../../database/models/index");

module.exports = {
  list: function (req, res) {
    db.Users.findAll({
      attributes: ["name", "id", "email"],
    })
      .then(function (users) {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue("endpoint", "/apiUsers/detail/" + users[i].id);
        }

        let respuestaApi = {
          meta: {
            status: 200,
            url: "/apiUsers/detail/",
            total: users.length,
          },
          data: users,
        };
        res.json(respuestaApi);
      })
      .catch(function () {
        res.json({ status: 500 });
      });
  },

  show: function(req,res){
    db.Users.findByPk(req.params.id).then(function(user){
            if (user != undefined) {
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/apiUsers/detail/" + user.id
                },
                data: user
            }
            return res.json(respuesta)
        } else {
            return res.json({ status: 204, msg: "este usuario no se encuentra" })
        }
    })
}
};
