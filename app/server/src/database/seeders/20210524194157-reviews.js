'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let reviews = [];
let amount = 50;


while (amount--) {
  reviews.push({
    email: faker.internet.email(),
    rating: faker.random.number({min:1, max:5}),
    title: faker.lorem.sentence(5),
    text: faker.lorem.paragraph(5),
    createdAt: new Date(),
    updatedAt: new Date(),
    ProductId: faker.random.number({min: 1, max: 50}),
    UserId: faker.random.number({min: 1, max: 50}),
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Reviews", reviews, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};

