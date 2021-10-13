const db = require("../../../database/models/index")

module.exports = {

    list: function (req, res) {
        db.Product.findAll(
        ).then(function (products) {
            for (let i = 0; i < products.length; i++) {
                products[i].setDataValue("endpoint", "/apisProducts/detail/" + products[i].id)
            }
            let respuesta = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: "/apisProducts/detail"
                },
                data: products

            }
            res.json(respuesta)
        }).catch(function () {
            res.json({ status: 500 })
        })
    },
    total: function (req, res) {
        db.Product.count().then(function(numero){
            res.json(numero)
        }).catch(function () {
            res.json({ status: 500 })
        })
    },

    show: function (req, res) {
        db.Category.findAll().then(function (categories) {
        db.Brand.findAll().then(function (brands) {
                db.Product.findByPk(req.params.id, {
                    include: ["images"]
                })
                    .then(function (product) {
                        if (product != undefined) {
                        let respuesta = {
                            meta: {
                                status: 200,
                                brands: brands.length,
                                categories: categories.length,
                                url: "/apisProducts/detail/" + product.id
                            },
                            data: product
                        }
                        return res.json(respuesta)
                    } else {
                        return res.json({ status: 204 ,msg: "este producto no se encuentra" })
                    }
                })

        })
        }).catch(function () {
            res.json({ status: 500 })
        })

    },

    categories: function(req,res){
        db.Category.findAll()

            .then(function (categories) {
                if (categories.length > 0) {
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/apisProducts/categories",
                            total: categories.length
                        },
                        data: categories
                    }
                    return res.json(apiResponse)
                } else {
                    return res.json({ status: 204 })
                }
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },
    totalCategories: function(req,res){
        db.Category.findAll({ include: "products"})

            .then(function (totalCategories) {
                console.log(totalCategories)
                if (totalCategories.length > 0) {
                    let arrayOfCategories = []
                    for(let i = 0; i < totalCategories.length; i++){
                        
                        arrayOfCategories.push({
                            nombre:totalCategories[i].dataValues.categories,
                            total:totalCategories[i].dataValues.products.length
                        })
                    }
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/apisProducts/categories",
                            total: totalCategories.length
                        },
                        data:arrayOfCategories
                        
                    }
                    return res.json(apiResponse)
                } else {
                    return res.json({ status: 204 })
                }
            })
            .catch(function () {
                res.json({ status: 500 })
            })
        }

}