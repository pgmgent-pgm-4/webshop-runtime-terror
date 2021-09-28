'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';




export default {
  up: async (queryInterface, Sequelize) => {
    let wishlists = [];
    let amount = 20; 
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    console.log(users[0])
    console.log(users[0][5].id)
    while (amount--) {
      console.log(amount)
      console.log('numbers', users[0][amount].id)
      wishlists.push({
        UserId: users[0][amount+1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    console.log(wishlists);
    await queryInterface.bulkInsert(
			"Wishlists", wishlists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wishlists', null, {});
  },
};

