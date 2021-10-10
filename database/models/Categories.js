module.exports = (sequelize, dataTypes) => {
    let alias = "Categories"
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
    };
    let config = {
        tableName: "categories",
        timestamps: false
    }
    
        const Categories = sequelize.define(alias, cols, config);
    
        Categories.associate = (models)=>{
            Categories.hasMany(models.Products,
          {
           as: "products",
          foreignKey: "category_id"
        })
        }

        return Categories;
    }