const sequelize = require('../db')
const {DataTypes, Sequelize} = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true
        },

        password: {
            type: DataTypes.STRING,
            required: true
        },

        isActivated: {
            type: DataTypes.BOOLEAN,
            default: false
        },

        activationLink: {
            type: DataTypes.STRING
        }
    })

    return User
}