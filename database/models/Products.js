module.exports = (sequelize, dataTypes) => {
    let alias = "Products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
               type: dataTypes.STRING(100),
               NotNull: true
        },
        price: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        brand_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        
        category_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },

        images: {
            type: dataTypes.STRING(300),
            NotNull: true
        },
        
        description: {
            type: dataTypes.STRING(300),
            NotNull: true
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

 