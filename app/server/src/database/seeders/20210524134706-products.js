'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';

let products = [];
let amount = 50;
const brands = ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex', 'Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf', 'Rios', 'Kuki', 'Vollmer', 'Xeric']
const watchBrands= ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex'];
const watchStoragesBrands = ['Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf'];
const watchBandsBrands = ['Rios', 'Kuki', 'Vollmer', 'Xeric'];
const watchMaterial = ['Carbon', 'Ceramic', 'King Gold', 'Leather', 'Magic Gold', 'Metal', 'Resin', 'Sapphire', 'Titanium'];
const colors = ['black', 'white', 'brown', 'silver', 'gold', 'blue', 'red', 'beige'];
const shapes = ['Round', 'Square', 'Rectangle', 'Other'];
const glass_materials = ['Sapphire glass', 'Crystal glass', 'Mineral glass', 'regular glass'];
const movementTypes = ['quartz', 'mechanical', 'automatic'];
const batteries = ['Renata 371 1.55v Silver Oxide', 'Renata 456 1.60v Silver Oxide', 'Renata 589 1.55v Silver Oxide', 'Renata 123 1.60v Silver Oxide ']
const storageMaterial = ['Carbon', 'Ceramic', 'Leather'];
const storageStyles = ['Case', 'Pouch', 'Roll'];
const collection = ['new', 'all'];
console.log('products')

while (amount--) {
  // 85% chance for admin user
  const boolean = Math.random() < 0.85;
  products.push({
    title: faker.commerce.productName(),
    brand: _.sample(brands),
    price: faker.commerce.price(30, 3000, 2, '€'),
    description: faker.lorem.paragraph(5),
    stock: boolean, 
    watch_display_length: faker.random.number({min: 30, max: 80, precision:2}),
    watch_thickness: faker.random.number({min: 10, max: 30, precision:2}),
    watch_length: faker.random.number({min: 140, max: 300, precision:2}),
    watch_width: faker.random.number({min: 16, max: 30, precision:2}),
    case_material: _.sample(watchMaterial),
    case_color: _.sample(colors),
    case_width: faker.random.number({min: 20, max: 50, precision:2}),
    case_length:faker.random.number({min: 20, max: 50, precision:2}),
    case_thickness: faker.random.number({min: 6, max: 12, precision:2}),
    case_shape: _.sample(shapes),
    glass_material: _.sample(glass_materials),
    glass_opening_diameter: faker.random.number({min: 26, max: 50, precision:2}),
    band_material: _.sample(watchMaterial),
    band_color: _.sample(colors),
    band_width: faker.random.number({min: 16, max: 40, precision:2}),
    circumference_range: `min. ${faker.random.number({min: 100, max: 200, precision:2})} - max. ${faker.random.number({min: 200, max: 300, precision:2})}`,
    movement_type: _.sample(movementTypes),
    battery: _.sample(batteries),
    battery_life: faker.random.number({min: 60, max: 200}),
    weight: faker.random.number({min: 50, max: 120, precision:2}),
    water_resistance: faker.random.number({min: 5, max: 50}),
    storage_material: _.sample(storageMaterial), 
    storage_color: _.sample(colors), 
    storage_width: faker.random.number({min: 60, max: 400, precision:2}),
    storage_length: faker.random.number({min: 60, max: 800, precision:2}),
    storage_thickness: faker.random.number({min: 100, max: 400, precision:2}),
    capacity: faker.random.number({min: 1, max: 16}),
    storage_style: _.sample(storageStyles),
    collection: _.sample(collection), 
    createdAt: new Date(),
    updatedAt: new Date(), 
  })
}

export default {
  up: async (queryInterface, Sequelize) => {
    console.log('product')
    await queryInterface.bulkInsert(
			"Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};


