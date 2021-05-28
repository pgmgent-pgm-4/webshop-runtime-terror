'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let orders = [];
let amount = 50;
let orderNumber = 101;
const orderStates = ['preparation', 'shipping', 'delivered']; 

while (amount--) {
  orderNumber++;
  orders.push({
    order_number: orderNumber,
    order_state: orderStates[Math.floor(Math.random() * orderStates.length)],
    delivery_charge: faker.random.number({min: 1, max: 300, precision: 2}),
    total_price: faker.random.number({min: 1, max: 10000, precision: 2}),
    delivery_date: faker.date.soon(7),
    createdAt: new Date(),
    updatedAt: new Date(),
    UserId: faker.random.number({min: 1, max: 50}),
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Orders", orders, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};


