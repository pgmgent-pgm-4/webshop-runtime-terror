'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let payments = [];
let amount = 50;
const paymentTypes = ['Visa', 'Bancontact']; 

while (amount--) {
  payments.push({
    payment_type: paymentTypes[Math.floor(Math.random() * paymentTypes.length)],
    amount: faker.random.number({min: 5, max: 10000, precision:2}),
    paid_date: faker.date.soon(7),
    createdAt: new Date(),
    updatedAt: new Date(),
    UserId: faker.random.number({min: 1, max: 50}),
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Payments", payments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payments', null, {});
  },
};



