'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';
import { splitter } from '../../utils/index';

let product_has_categories = [];

const getCategory = (category) => {
  let cat = '';
  switch (category) {
    case 'men':
      cat = 1;
      break;
    case 'women':
      cat = 2;
      break;
    case 'storage':
      cat = 3;
      break;
    case 'bands':
      cat = 4;
      break;
    case 'outlet':
      cat = 5;
      break;
  }
  return cat;
}


export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id, image FROM 'products'");
    products[0].forEach(product => {
      const category = splitter(product.image, '__',  0, 1).toLowerCase();
      const cat = getCategory(category);
      product_has_categories.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        CategoryId: cat,
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

