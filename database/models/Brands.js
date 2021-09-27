module.exports = (sequelize, dataTypes) => {
    let alias = "Brands"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
               type: dataTypes.STRING(100)
        },
        
    };
    let config = {
        tableName: "brands",
        timestamps: false
    }
    
        const Brands = sequelize.define(alias, cols, config);
    
        Brands.associate = (models)=>{
            Brands.hasMany(models.Products,
          {
           as: "Products",
          foreignKey: "brand_id"
        })
        }

        return Brands;
    }