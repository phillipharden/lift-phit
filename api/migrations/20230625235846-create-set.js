'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      setnumber: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      reps: {
        type: Sequelize.INTEGER
      },
      exerciseid: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Exercises'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sets');
  }
};