'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

let product_superlatives = [];
let amount = 50;
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


while (amount--) {
  const superlative = superlatives[Math.floor(Math.random() * superlatives.length)];
  product_superlatives.push({
    superlative: superlative.name,
    img: superlative.img,
    createdAt: new Date(),
    updatedAt: new Date(),
    ProductId: faker.random.number({min: 1, max: 50})
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Product_superlatives", product_superlatives, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_superlatives', null, {});
  },
};
