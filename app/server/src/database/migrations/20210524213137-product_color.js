import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.Product_color.tableName, database.Product_color.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.Product_color.tableName);
  }
};

