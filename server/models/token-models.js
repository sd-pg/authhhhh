
module.exports = (sequelize, Sequelize) => {
    const Tokens = sequelize.define("Tokens", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        userId:{
            type: Sequelize.INTEGER,
            references: {
                model: "Users",
                key: "id"
            }
        },
        refreshToken: {
            type: Sequelize.STRING,
            required: true
        },
    }, {timestamps: false})

    return Tokens
}
