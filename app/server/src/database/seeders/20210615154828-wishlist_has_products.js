'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';
import { splitter } from '../../utils/index';

let wishlist_has_products = [];

export default {
  up: async (queryInterface, Sequelize) => {
    const products = await queryInterface.sequelize.query("SELECT id FROM 'products'");
    console.log(products)
    const wishlists = await queryInterface.sequelize.query("SELECT id FROM 'wishlists'");
    console.log(wishlists)
    wishlists[0].forEach(wishlist => {
      wishlist_has_products.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        WishlistId: wishlist.id,
        ProductId: _.sample(products[0]).id,
      }); 
    });
    await queryInterface.bulkInsert(
			"Wishlist_has_products", wishlist_has_products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wishlist_has_products', null, {});
  },
};


