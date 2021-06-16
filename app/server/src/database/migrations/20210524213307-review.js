import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.Review.tableName, database.Review.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.Review.tableName);
  }
};
