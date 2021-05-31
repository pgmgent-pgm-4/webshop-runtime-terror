'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';





export default {
  up: async (queryInterface, Sequelize) => {
    let profiles = [];
    const users = await queryInterface.sequelize.query("SELECT id FROM `users`");
    users[0].forEach(user => {
      // 15% chance for admin user
      const boolean = Math.random() < 0.15;
      profiles.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        admin: boolean,
        street: faker.address.streetName(),
        number: faker.random.number({min: 10, max: 100}), 
        zip_code: faker.address.zipCode('####'),
        city: faker.address.city(),
        country: faker.address.country(),
        phone: faker.phone.phoneNumberFormat(5),
        img: faker.image.avatar(),
        birthday: faker.date.past(100),
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: user.id
      })
    }); 
    await queryInterface.bulkInsert(
			"Profiles", profiles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Profiles', null, {});
  },
};

