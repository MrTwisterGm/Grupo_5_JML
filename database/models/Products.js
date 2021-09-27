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
        
        category_id: {
            type: dataTypes.INTEGER
        },

        images: {
            type: dataTypes.STRING(300)
        },
        
        description: {
            type: dataTypes.STRING(300)
        },
        
        delete_at:{
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    
        const Products = sequelize.define(alias, cols, config);
    
        Products.associate = (models) => {
            Products.belongsTo(models.Categories,
                {
                    as: "categories",
                    foreignKey: "category_id"
                }),
            
            Products.belongsTo(models.Brands,
                {
                    as: "brand",
                    foreignKey: "brand_id"
                }
                )
        }

        return Products;
    }

 