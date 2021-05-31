'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let order_products = [];


export default {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    const orders = await queryInterface.sequelize.query("SELECT id FROM 'orders'");
    orders[0].forEach(order => {
      order_products.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        order_id: order.id,
        product_id: _.sample(users[0]).id,
      }); 
    });
    await queryInterface.bulkInsert(
			"Order_products", order_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Order_products', null, {});
  },
};
