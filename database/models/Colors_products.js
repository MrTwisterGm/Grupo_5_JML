module.exports = (sequelize, dataTypes) => {
    let alias = "Colors_products"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
               type: dataTypes.STRING(100)
        },
        color_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        
    };
    let config = {
        tableName: "colors_products",
        timestamps: false
    }
    
        const Colors_products = sequelize.define(alias, cols, config);
    
    
         Colors_products.associate = function(models){
     
             Colors_products.belongsTo(models.Colors,{
                 as:'colors',
                 foreignKey: 'color_id'
             }),

             Colors_products.belongsTo(models.Products,{
                as:'products',
                foreignKey: 'product_id'
            })
     
         }
     
         return Colors_products;
     
     }

