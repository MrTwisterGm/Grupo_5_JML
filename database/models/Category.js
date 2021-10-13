module.exports = (sequelize, dataTypes) => {
    let alias = "Category"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            NotNull: true
        },
        category: {
               type: dataTypes.STRING(100),
               NotNull: true
        },
    };
    let config = {
        tableName: "category",
        timestamps: false,
        underscored: false,
        paranoid:true
    }
    
        const Category = sequelize.define(alias, cols, config);
    
        Category.associate = (models)=>{
            Category.hasMany(models.Product,
          {
           as: "Product",
          foreignKey: "category_id"
        })
        }

        return Category;
    }