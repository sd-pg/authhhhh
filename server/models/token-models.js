
module.exports = (sequelize, Sequelize) => {
    const Tokens = sequelize.define("Tokens", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        userId:{
            type: Sequelize.UUID,
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
