'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let reviews = [];




export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    products[0].forEach(product => {
      for(let i=faker.random.number({min: 1, max: 5}); i > 0; i--) {
        reviews.push({
          rating: faker.random.number({min:1, max:5}),
          title: faker.lorem.sentence(5),
          text: faker.lorem.paragraph(5),
          createdAt: new Date(),
          updatedAt: new Date(),
          ProductId: product.id,
          UserId: _.sample(users[0]).id,
        })
      }
    });
    console.log(reviews.length);
    await queryInterface.bulkInsert(
			"Reviews", reviews, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};

