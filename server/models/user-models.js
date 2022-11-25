
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("Users", {
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
        },
    }, {timestamps: false})

    return Users
}