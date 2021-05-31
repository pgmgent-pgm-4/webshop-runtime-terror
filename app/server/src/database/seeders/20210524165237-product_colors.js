'use strict';

import faker from 'faker';
import 'babel-polyfill';
import _ from 'underscore';
import database from '../index.js';

let product_colors = [];
let amount = 50;
const colors = ['343434', 'FFFFFF', 'A37652', '999999', 'F5CB60', '4969B2', 'C0402A', 'EDE2D0'];


export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM `products`");
    while (amount--) {
      product_colors.push({
        color: _.sample(colors),
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: _.sample(products[0]).id
      })
    }    
    await queryInterface.bulkInsert(
			"Product_colors", product_colors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_colors', null, {});
  },
};

