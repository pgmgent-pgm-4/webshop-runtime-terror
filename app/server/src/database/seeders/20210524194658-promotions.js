'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let promotions = [];
let amount = 50;
const promos = ['Winter promo', 'Summer promo', 'outlet']; 

while (amount--) {
  const boolean = Math.random() < 0.65;
  promotions.push({
    name: promos[Math.floor(Math.random() * promos.length)],
    discount_percent: faker.random.number({min:1, max:80, precision:2}),
    active: boolean,
    createdAt: new Date(),
    updatedAt: new Date(),
    ProductId: faker.random.number({min: 1, max: 50}),
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Promotions", promotions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Promotions', null, {});
  },
};

