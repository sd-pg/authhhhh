   'use strict';
const {DataTypes} = require("sequelize");
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("Tokens", {
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
