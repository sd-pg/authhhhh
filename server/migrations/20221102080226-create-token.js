'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("Token", {
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

      }, {transaction})

      await transaction.commit()

    } catch (error) {
      transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable("Token", {transaction})

      await transaction.commit()
    } catch (error) {
      transaction.rollback()
      throw error
    }
  }
};
