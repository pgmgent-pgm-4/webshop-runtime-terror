import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.Product_superlative.tableName, database.Product_superlative.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.Product_superlative.tableName);
  }
};

