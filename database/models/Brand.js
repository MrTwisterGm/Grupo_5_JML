module.exports = (sequelize, dataTypes) => {
    let alias = "Brand"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            NotNull: true
        },
        brand: {
               type: dataTypes.STRING(100),
               NotNull: true
        },
        
    };
    let config = {
        tableName: "brand",
        timestamps: false,
        underscored: false, 
        paranoid:true
    }
    
        const Brand = sequelize.define(alias, cols, config);
    
        Brand.associate = (models)=>{
            Brand.hasMany(models.Product,
          {
           as: "Product",
          foreignKey: "brand_id"
        })
        }

        return Brand;
    }