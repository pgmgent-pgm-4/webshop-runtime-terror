'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';
import fs from 'fs';
import path from 'path';
import { splitter } from '../../utils/index'


const products = [];

const watchMaterial = ['Carbon', 'Ceramic', 'King Gold', 'Leather', 'Magic Gold', 'Metal', 'Resin', 'Sapphire', 'Titanium'];
const colors = ['black', 'white', 'brown', 'silver', 'gold', 'blue', 'red', 'beige'];
const shapes = ['Round', 'Square', 'Rectangle', 'Other'];
const glass_materials = ['Sapphire glass', 'Crystal glass', 'Mineral glass', 'regular glass'];
const movementTypes = ['quartz', 'mechanical', 'automatic'];
const batteries = ['Renata 371 1.55v Silver Oxide', 'Renata 456 1.60v Silver Oxide', 'Renata 589 1.55v Silver Oxide', 'Renata 123 1.60v Silver Oxide ']
const storageMaterial = ['Carbon', 'Ceramic', 'Leather'];
const storageStyles = ['Case', 'Pouch', 'Roll'];


const images = fs.readdirSync(path.join(__dirname, '../../public/media/products'));

const porductInfos = images.map(image => {
  return {
    name: splitter(image,'__', 2, 3).split('.png')[0].toLowerCase().replace(/_/g, ' '),
    brand: splitter(image,'__', 1, 2).toLowerCase(),
    img: image,
    category: splitter(image,'__', 0, 1).toLowerCase(),
  } 
});


porductInfos.forEach((product) => {
  // 85% chance for in stock
  const boolean = Math.random() < 0.85;
  const col = Math.random() < 0.05 ? 'new' : 'all';
  products.push({
    title: product.name,
    brand: product.brand,
    image: product.img,
    price: faker.commerce.price(30, 3000, 2, '€'),
    description: faker.lorem.paragraph(5),
    stock: boolean, 
    watch_display_length: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 30, max: 80, precision:2}) : null,
    watch_thickness: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 10, max: 30, precision:2}) : null,
    watch_length: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 140, max: 300, precision:2}) : null,
    watch_width: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 16, max: 30, precision:2}) : null,
    case_material: product.category === 'men' || product.category === 'women' ? _.sample(watchMaterial) : null,
    case_color: product.category === 'men' || product.category === 'women' ? _.sample(colors) : null,
    case_width: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 20, max: 50, precision:2}) : null,
    case_length: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 20, max: 50, precision:2}) : null,
    case_thickness: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 6, max: 12, precision:2}) : null,
    case_shape: product.category === 'men' || product.category === 'women' ? _.sample(shapes) : null,
    glass_material: product.category === 'men' || product.category === 'women' ? _.sample(glass_materials) : null,
    glass_opening_diameter: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 26, max: 50, precision:2}) : null,
    band_material: product.category === 'men' || product.category === 'women' || product.category === 'bands' ? _.sample(watchMaterial) : null,
    band_color: product.category === 'men' || product.category === 'women' || product.category === 'bands' ? _.sample(colors) : null,
    band_width: product.category === 'men' || product.category === 'women' || product.category === 'bands' ? faker.random.number({min: 16, max: 40, precision:2}) : null,
    band_length: product.category === 'men' || product.category === 'women' || product.category === 'bands' ? faker.random.number({min: 16, max: 40, precision:2}) : null,
    circumference_range: product.category === 'men' || product.category === 'women' ? `min. ${faker.random.number({min: 100, max: 200, precision:2})} - max. ${faker.random.number({min: 200, max: 300, precision:2})}` : null,
    movement_type: product.category === 'men' || product.category === 'women' ? _.sample(movementTypes) : null,
    battery: product.category === 'men' || product.category === 'women' ? _.sample(batteries) : null,
    battery_life: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 60, max: 200}) : null,
    weight: product.category === 'men' || product.category === 'women' || product.category === 'bands' ? faker.random.number({min: 50, max: 120, precision:2}) : null,
    water_resistance: product.category === 'men' || product.category === 'women' ? faker.random.number({min: 5, max: 50}) : null,
    storage_material: product.category === 'storage' ? _.sample(storageMaterial) : null, 
    storage_color: product.category === 'storage' ? _.sample(colors) : null, 
    storage_width: product.category === 'storage' ? faker.random.number({min: 60, max: 400, precision:2}) : null,
    storage_length: product.category === 'storage' ? faker.random.number({min: 60, max: 800, precision:2}) : null,
    storage_thickness: product.category === 'storage' ? faker.random.number({min: 100, max: 400, precision:2}) : null,
    capacity: product.category === 'storage' ? faker.random.number({min: 1, max: 16}) : null,
    storage_style: product.category === 'storage' ? _.sample(storageStyles) : null,
    collection: col, 
    createdAt: new Date(),
    updatedAt: new Date(), 
  })
}); 


export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
			"Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
