'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let product_has_categories = [];

export default {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query("SELECT id FROM `categories`");
    const products = await queryInterface.sequelize.query("SELECT id FROM 'products'");
    products[0].forEach(product => {
      product_has_categories.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        CategoryId: _.sample(categories[0]).id,
        ProductId: product.id,
      }); 
    });
    await queryInterface.bulkInsert(
			"Product_has_categories", product_has_categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_has_categories', null, {});
  },
};

