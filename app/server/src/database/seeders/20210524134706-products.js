'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';

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


while (amount--) {
  // 85% chance for admin user
  const boolean = Math.random() < 0.85;
  products.push({
    title: faker.commerce.productName(),
    brand: brands[Math.floor(Math.random() * brands.length)],
    price: faker.commerce.price(30, 3000, 2, '€'),
    description: faker.lorem.paragraph(5),
    stock: boolean, 
    watch_display_length: faker.random.number({min: 30, max: 80, precision:2}),
    watch_thickness: faker.random.number({min: 10, max: 30, precision:2}),
    watch_length: faker.random.number({min: 140, max: 300, precision:2}),
    watch_width: faker.random.number({min: 16, max: 30, precision:2}),
    case_material: watchMaterial[Math.floor(Math.random() * watchMaterial.length)],
    case_color: colors[Math.floor(Math.random() * colors.length)],
    case_width: faker.random.number({min: 20, max: 50, precision:2}),
    case_length:faker.random.number({min: 20, max: 50, precision:2}),
    case_thickness: faker.random.number({min: 6, max: 12, precision:2}),
    case_shape: shapes[Math.floor(Math.random() * shapes.length)],
    glass_material: glass_materials[Math.floor(Math.random() * glass_materials.length)],
    glass_opening_diameter: faker.random.number({min: 26, max: 50, precision:2}),
    band_material: watchMaterial[Math.floor(Math.random() * watchMaterial.length)],
    band_color: colors[Math.floor(Math.random() * colors.length)],
    band_width: faker.random.number({min: 16, max: 40, precision:2}),
    circumference_range: `min. ${faker.random.number({min: 100, max: 200, precision:2})} - max. ${faker.random.number({min: 200, max: 300, precision:2})}`,
    movement_type: movementTypes[Math.floor(Math.random() * movementTypes.length)],
    battery: batteries[Math.floor(Math.random() * batteries.length)],
    battery_life: faker.random.number({min: 60, max: 200}),
    weight: faker.random.number({min: 50, max: 120, precision:2}),
    water_resistance: faker.random.number({min: 5, max: 50}),
    storage_material: storageMaterial[Math.floor(Math.random() * storageMaterial.length)], 
    storage_color: colors[Math.floor(Math.random() * colors.length)], 
    storage_width: faker.random.number({min: 60, max: 400, precision:2}),
    storage_length: faker.random.number({min: 60, max: 800, precision:2}),
    storage_thickness: faker.random.number({min: 100, max: 400, precision:2}),
    capacity: faker.random.number({min: 1, max: 16}),
    storage_style: storageStyles[Math.floor(Math.random() * storageStyles.length)],
    collection: collection[Math.floor(Math.random() * collection.length)], 
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


