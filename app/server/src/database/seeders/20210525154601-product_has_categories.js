'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let product_has_categories = [];
let amount = 50;
let productId = 0;


while (amount--) {
  productId++;
  product_has_categories.push({
    createdAt: new Date(),
    updatedAt: new Date(),
    category_id: faker.random.number({min: 1, max: 5}),
    product_id: productId,
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Product_has_categories", product_has_categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_has_categories', null, {});
  },
};



