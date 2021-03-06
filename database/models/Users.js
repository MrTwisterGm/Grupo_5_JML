module.exports = (sequelize, dataTypes) => {
let alias = "Users"
let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
           type: dataTypes.STRING(100)
    },
    last_name: {
        type: dataTypes.STRING(100)
    },
    email: {
        type: dataTypes.STRING(100)
    },
    
    password: {
        type: dataTypes.STRING(100)
    },

};
let config = {
    tableName: "users",
    timestamps: true,
    underscored: true,
        paranoid: true
}

    const Users = sequelize.define(alias, cols, config);

    return Users;
}

 
