const db = require ("../../database/models")
const { validationResult } = require('express-validator');

module.exports = {

    allproducts:(req,res) => {
       db.Products.findAll()
       .then((resultados) => {
        res.render("listadoDeProductos", {resultados: products});
       });
    },    

    // show: (req,res) => res.render("productDetail",{product:product.one(req.params.id)}),
    create: (req,res) => res.render("newProduct"),
    save: (req,res) => {
        // const resultProductsValidation = validationResult(req);
        
        // if(!resultProductsValidation.errors.length){

        db.Products.create({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            brand_id: req.body.brand_id,
            categories_id: req.body.categories_id,
            price: req.body.price   
        })
        .then((resultados) => {
            res.redirect('/products');
        })
    },
    detail: (req,res) => {
        db.Products.findByPk(req.params.id)
        .then(response => {
            res.render('productDetail')
        })
            
    }
    
    // edit: (req,res) => res.render("product/edit",{product:product.one(req.params.id),colors: color.all(),brands:brand.all()}),
    // update: (req,res) =>{
    //     let result = product.edit(req.body,req.file,req.params.id)
    //     return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    // },
    // delete: (req,res) => {
    //     let result = product.delete(req.params.id);
    //     return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    // },
    
}