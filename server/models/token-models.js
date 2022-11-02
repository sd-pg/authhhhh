const sequelize = require('../db')
const {DataTypes} = require("sequelize");


module.exports = (sequelize, Sequelize) => {
    const Token = sequelize.define("Token", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        userId:{
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id"
            }
        },
        refreshToken: {
            type: DataTypes.STRING,
            required: true
        },
    })

    return Token
}
