module.exports = (sequelize, dataTypes) => {
    let alias = "Product"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            NotNull: true
        },
        name: {
               type: dataTypes.STRING(100),
               NotNull: true
        },
        price: {
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
        brand_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },
        
        category_id: {
            type: dataTypes.INTEGER,
            NotNull: true
        },

        
        deleted_at:{
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "product",
        timestamps: true,
        underscored: true,
        paranoid: true
    }
    
        const Product = sequelize.define(alias, cols, config);
    
        Product.associate = (models) => {
            Product.belongsTo(models.Category,
                {
                    as: "category",
                    foreignKey: "category_id"
                }),
            
            Product.belongsTo(models.Brand,
                {
                    as: "brand",
                    foreignKey: "brand_id"
                }
                )
        }

        return Product;
    }

 