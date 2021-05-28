'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let order_products = [];
let amount = 50;
let orderId = 0;


while (amount--) {
  orderId++;
  order_products.push({
    createdAt: new Date(),
    updatedAt: new Date(),
    order_id: orderId,
    product_id: faker.random.number({min: 1, max: 50}),
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Order_products", order_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Order_products', null, {});
  },
};
