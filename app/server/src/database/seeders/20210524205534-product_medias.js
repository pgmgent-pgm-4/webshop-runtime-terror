'use strict';

import 'babel-polyfill';
import database from '../index.js';


let product_medias= [];
const medias = [
  {
    product: 1,
    img: 'img1.png',
  },
  { 
    product: 1,
    img: 'img2.png',
   },
   {
    product: 1,
    img: 'img3.png',
  },
  {
    product: 2,
    img: 'img4.png',
  },
  {
    product: 2,
    img: 'img5.png', 
  },
  {
    product: 2,
    img: 'img6.png'
  }
];


medias.map(media => {
  product_medias.push({
    img: media.img,
    createdAt: new Date(),
    updatedAt: new Date(),
    ProductId: media.product
  });
});

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Product_media", product_medias, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product_media', null, {});
  },
};




