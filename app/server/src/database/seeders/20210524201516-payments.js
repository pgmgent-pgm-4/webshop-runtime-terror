'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let payments = [];
let amount = 50;
const paymentTypes = ['Visa', 'Bancontact']; 



export default {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    while (amount--) {
      payments.push({
        payment_type: _.sample(paymentTypes),
        amount: faker.random.number({min: 5, max: 10000, precision:2}),
        paid_date: faker.date.soon(7),
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: _.sample(users[0]).id,
      })
    }
    await queryInterface.bulkInsert(
			"Payments", payments, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payments', null, {});
  },
};



