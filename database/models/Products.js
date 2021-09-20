module.exports = (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
               type: dataTypes.STRING(100)
        },
        price: {
            type: dataTypes.INTEGER
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        
        categorie_id: {
            type: dataTypes.INTEGER
        },

        images: {
            type: dataTypes.STRING(300)
        },
        
        description: {
            type: dataTypes.STRING(300)
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    }
    
        const Products = sequelize.define(alias, cols, config);
    
        return Products;
    }

 