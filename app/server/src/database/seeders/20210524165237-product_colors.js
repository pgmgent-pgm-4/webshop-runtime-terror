'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let product_colors = [];
let amount = 50;
const colors = ['343434', 'FFFFFF', 'A37652', '999999', 'F5CB60', '4969B2', 'C0402A', 'EDE2D0'];


while (amount--) {
  product_colors.push({
    color: colors[Math.floor(Math.random() * colors.length)],
    createdAt: new Date(),
    updatedAt: new Date(),
    ProductId: faker.random.number({min: 1, max: 50})
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Product_colors", product_colors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_colors', null, {});
  },
};

