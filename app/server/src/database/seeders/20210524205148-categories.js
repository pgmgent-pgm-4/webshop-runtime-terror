'use strict';

import 'babel-polyfill';
import database from '../index.js';

const cat = [
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
];




export default {
  up: async (queryInterface, Sequelize) => {
    const existingCats = await queryInterface.sequelize.query("SELECT id FROM `categories`");
    console.log(existingCats[0]);
    if (existingCats[0].length > 0) {
      return 
    } else {
      await queryInterface.bulkInsert(
        "Categories", cat, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};



