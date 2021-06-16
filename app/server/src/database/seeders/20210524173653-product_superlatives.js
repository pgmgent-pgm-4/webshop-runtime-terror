'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';
import { splitter } from '../../utils/index';

let product_superlatives = [];

const superlatives = [
  {
    name:'Superior precision',
    img: 'precision.svg',
  },
  { 
    name: 'Durability',
    img: 'forever.svg',
   },
   {
    name: 'Shock-resistance',
    img: 'shield.svg',
  },
  {
    name: 'Water-resistance',
    img: 'water-resistant.svg',
  },
  {
    name: 'Anti-magnetic',
    img: 'magnet.svg', 
  },
  {
    name: 'Less servicing',
    img: 'customer-support.svg'
  }
];




export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id, image FROM `products`");
    products[0].forEach(product => {
      const category = splitter(product.image, '__',  0, 1).toLowerCase();
      if (category === 'men' || category === 'women') {
        superlatives.forEach(superlative => {
          product_superlatives.push({
            superlative: superlative.name,
            img: superlative.img,
            createdAt: new Date(),
            updatedAt: new Date(),
            ProductId: product.id,
          });
        });
      }
    });
    console.log(product_superlatives.length);
    await queryInterface.bulkInsert(
			"Product_superlatives", product_superlatives, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_superlatives', null, {});
  },
};
