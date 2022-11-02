'use strict';
const {DataTypes} = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("User", {
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
          default: false},

        activationLink: {
          type: DataTypes.STRING
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
      await queryInterface.dropTable("User", {transaction})

      await transaction.commit()
    } catch (error) {
      transaction.rollback()
      throw error
    }
  }
};
