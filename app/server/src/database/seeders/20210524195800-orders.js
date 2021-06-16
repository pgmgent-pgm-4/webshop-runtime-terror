'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let orders = [];
let amount = 80;
const orderStates = ['shopping bag', 'shipping', 'delivered']; 
let orderNumber = 0;

export default {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    const existingOrders = await queryInterface.sequelize.query("SELECT order_number FROM `orders`");
    console.log(orders[0])
    console.log('laatst',existingOrders[0][existingOrders[0].length - 1])
    existingOrders[0].length > 0 ? orderNumber = existingOrders[0][existingOrders[0].length - 1].order_number + 1 : ''; 
    console.log(orderNumber);
    while (amount--) {
      orderNumber++;
      console.log(orderNumber);
      orders.push({
        order_number: orderNumber,
        order_state: _.sample(orderStates),
        delivery_charge: faker.random.number({min: 1, max: 300, precision: 2}),
        total_price: faker.random.number({min: 1, max: 10000, precision: 2}),
        delivery_date: faker.date.soon(7),
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: _.sample(users[0]).id,
      })
    }    
    await queryInterface.bulkInsert(
			"Orders", orders, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};


