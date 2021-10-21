const db = require("../../database/models");


module.exports = {
  allproducts: (req, res) => {
    db.Product.findAll({
      where: { deleted_at: null },
    }).then((products) => {
      res.render("listadoDeProductos", { products });
    });
  },

  create: function (req, res) {
    db.Category.findAll().then(function (category) {
      db.Brand.findAll().then(function (brand) {
        return res.render("newProduct", { brand, category });
      });
    });
  },

  save: (req, res) => {
    console.log(req.body)
    db.Product.create({
      name: req.body.name,
      description: req.body.description,
      images: req.file.filename,
      brand_id: req.body.brand,
      category_id: req.body.category,
      price: req.body.price,
    })
      .then((resultados) => {
        res.redirect("/products");
        console.log(resultados)
      })
      .catch(function (e) {
        console.log(e);
        res.send(e);
      });
  },

  detail: (req, res) => {
    db.Product.findAll().then(function (product) {
      db.Category.findAll().then(function (category) {
        db.Brand.findAll().then(function (brand) {
          db.Product.findByPk(req.params.id).then((response) => {
            res.render("productDetail", { brand, category, product });
          });
        });
      });
    });
  },

  edit: (req, res) => {
    db.Product.findAll().then(function (product) {
      db.Category.findAll().then(function (category) {
        db.Brand.findAll().then(function (brand) {
          db.Product.findByPk(req.params.id).then((response) => {
            res.render("productEdit", { brand, category, product });
          });
        });
      });
    });
  },

  update: (req, res) => {
    db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        brand_id: req.body.brand_id,
        categories_id: req.body.categories_id,
        price: req.body.price,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function (resultado) {
        res.redirect("/products");
      })
      .catch(function (e) {
        res.send(e);
      });
  },

  delete: (req, res) => {
    db.Product.update(
      {
        deleted_at: Date.now(),
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function () {
        res.redirect("/products");
      })
      .catch(function (e) {
        return res.send(e);
      });
  },

  search: function (req, res) {
    db.Product.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.search + "%" },

        
      },
    })
      .then(function (products) {
        return res.render("listadoDeProductos", { products });
      })
      .catch(function (e) {
        console.log(e);
      });
  }

};
