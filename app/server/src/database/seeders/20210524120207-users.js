'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let users = [];
let amount = 50; 
while (amount--) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
