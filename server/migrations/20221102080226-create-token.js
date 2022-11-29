   'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("Tokens", {
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
          type: DataTypes.STRING,
          required: true
        },

      }, {timestamps: false}, {transaction})

      await transaction.commit()

    } catch (error) {
      transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable("Tokens", {transaction})

      await transaction.commit()
    } catch (error) {
      transaction.rollback()
      throw error
    }
  }
};
