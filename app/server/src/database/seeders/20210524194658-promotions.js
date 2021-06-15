'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let promotions = [];
const promos = ['Winter promo', 'Summer promo', 'Sales']; 



export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    console.log(products[0])
    products[0].forEach(product => {
      const boolean = Math.random() < 0.5;
      const active = Math.random() < 0.5;
      if (boolean) {
        promotions.push({
          name: _.sample(promos),
          discount_percent: faker.random.number({min:1, max:80, precision:2}),
          active: active,
          createdAt: new Date(),
          updatedAt: new Date(),
          ProductId: product.id,
        })
      };
    });


    await queryInterface.bulkInsert(
			"Promotions", promotions, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Promotions', null, {});
  },
};

