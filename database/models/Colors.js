module.exports = (sequelize, dataTypes) => {
    let alias = "Colors"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
               type: dataTypes.STRING(100)
        },
        value: {
            type: dataTypes.STRING(100)
        }
    };
    let config = {
        tableName: "colors",
        timestamps: false
    }
    
        const Colors = sequelize.define(alias, cols, config);
    
        return Colors;
    }