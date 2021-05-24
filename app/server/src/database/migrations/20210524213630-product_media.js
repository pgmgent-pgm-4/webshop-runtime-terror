import 'babel-polyfill';

import database from '../index';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.Product_media.tableName, database.Profile.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.Product_media.tableName);
  }
};
