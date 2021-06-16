'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let order_products = [];


export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    const orders = await queryInterface.sequelize.query("SELECT id FROM 'orders'");
    orders[0].forEach(order => {
      order_products.push({
        quantity: faker.random.number({min: 1, max: 5}),
        createdAt: new Date(),
        updatedAt: new Date(),
        OrderId: order.id,
        ProductId: _.sample(products[0]).id,
      }); 
    });
    await queryInterface.bulkInsert(
			"Order_products", order_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Order_products', null, {});
  },
};
