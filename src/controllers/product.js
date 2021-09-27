const db = require("../../database/models/index");


module.exports = {
  allproducts: (req, res) => {
    db.Products.findAll({
      where: { deleted_at: null },
    }).then((resultados) => {
      res.render("listadoDeProductos", { products });
    });
  },

  create: function (req, res) {
    db.Categories.findAll().then(function (category) {
      db.Brands.findAll().then(function (brand) {
        return res.render("newProduct", { brand, category });
      });
    });
  },

  save: (req, res) => {
    db.Products.create({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
      brand_id: req.body.brand_id,
      categories_id: req.body.categories_id,
      price: req.body.price,
    })
      .then((resultados) => {
        res.redirect("/products");
      })
      .catch(function (e) {
        console.log(e);
      });
  },

  detail: (req, res) => {
    db.Products.findAll().then(function (product) {
      db.Categories.findAll().then(function (category) {
        db.Brands.findAll().then(function (brand) {
          db.Products.findByPk(req.params.id).then((response) => {
            res.render("productDetail", { brand, category, product });
          });
        });
      });
    });
  },

  edit: (req, res) => {
    db.Products.findAll().then(function (product) {
      db.Categories.findAll().then(function (category) {
        db.Brands.findAll().then(function (brand) {
          db.Products.findByPk(req.params.id).then((response) => {
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
