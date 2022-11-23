
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            unique: true
        },

        email: {
            type: Sequelize.STRING,
            unique: true,
            required: true
        },

        password: {
            type: Sequelize.STRING,
            required: true
        },

        isActivated: {
            type: Sequelize.BOOLEAN,
            default: false
        },

        activationLink: {
            type: Sequelize.STRING
        }
    })

    return User
}