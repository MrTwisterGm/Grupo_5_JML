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
    e_mail: {
        type: dataTypes.STRING(100)
    },
    
    password: {
        type: dataTypes.STRING(50)
    },

};
let config = {
    tableName: "users",
    timestamps: false
}

    const Users = sequelize.define(alias, cols, config);

    return Users;
}
