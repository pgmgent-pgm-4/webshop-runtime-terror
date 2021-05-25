'use strict';

import 'babel-polyfill';
import database from '../index.js';

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Categories", [
        {
          name: "Men",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Women",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watch storages",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Watch bands",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outlet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};



