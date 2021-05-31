'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let reviews = [];
let amount = 50;




export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    while (amount--) {
      reviews.push({
        email: faker.internet.email(),
        rating: faker.random.number({min:1, max:5}),
        title: faker.lorem.sentence(5),
        text: faker.lorem.paragraph(5),
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: _.sample(products[0]).id,
        UserId: _.sample(users[0]).id,
      })
    }
    await queryInterface.bulkInsert(
			"Reviews", reviews, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};

