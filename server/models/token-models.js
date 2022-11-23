
module.exports = (sequelize, Sequelize) => {
    const Token = sequelize.define("Token", {
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
                model: "User",
                key: "id"
            }
        },
        refreshToken: {
            type: Sequelize.STRING,
            required: true
        },
    })

    return Token
}
