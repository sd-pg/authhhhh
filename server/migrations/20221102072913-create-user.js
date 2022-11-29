'use strict';
const {DataTypes} = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable("Users", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
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

      }, {timestamps: false},{transaction})

      await transaction.commit()


    } catch (error) {
      transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable("Users", {transaction})

      await transaction.commit()
    } catch (error) {
      transaction.rollback()
      throw error
    }
  }
};
