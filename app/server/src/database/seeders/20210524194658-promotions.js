'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let promotions = [];
let amount = 50;
const promos = ['Winter promo', 'Summer promo', 'outlet']; 



export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    while (amount--) {
      // 65% chance 
      const boolean = Math.random() < 0.65;
      promotions.push({
        name: _.sample(promos),
        discount_percent: faker.random.number({min:1, max:80, precision:2}),
        active: boolean,
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: _.sample(products[0]).id,
      })
    }

    await queryInterface.bulkInsert(
			"Promotions", promotions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Promotions', null, {});
  },
};

