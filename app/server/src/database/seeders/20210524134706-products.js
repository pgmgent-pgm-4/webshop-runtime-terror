'use strict';

import faker from 'faker';
import 'babel-polyfill';
import database from '../index.js';
import _ from 'underscore';
import fs from 'fs';
import path from 'path';
import { splitter } from '../../utils/index'


const products = [];
// let amount = 50;
// const brands = ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex', 'Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf', 'Rios', 'Kuki', 'Vollmer', 'Xeric']
// const watchBrands= ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex'];
// const watchStoragesBrands = ['Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf'];
// const watchBandsBrands = ['Rios', 'Kuki', 'Vollmer', 'Xeric'];
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
  // 85% chance for admin user
  const boolean = Math.random() < 0.85;
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
    collection: _.sample(collection), 
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
























// 'use strict';

// import faker from 'faker';
// import 'babel-polyfill';
// import database from '../index.js';
// import _ from 'underscore';

// let products = [];
// let amount = 50;
// const brands = ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex', 'Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf', 'Rios', 'Kuki', 'Vollmer', 'Xeric']
// const watchBrands= ['Audemars Piguet', 'Breitling', 'Cartier', 'Certina', 'Hublot', 'Jaeger_lecoultre', 'Panerai', 'Omega', 'Rolex'];
// const watchStoragesBrands = ['Cady Bay', 'Case Elegance', 'Invicta', 'Monochrome', 'Orbita', 'Scatola Del Tempo', 'Volta', 'Wolf'];
// const watchBandsBrands = ['Rios', 'Kuki', 'Vollmer', 'Xeric'];
// const watchMaterial = ['Carbon', 'Ceramic', 'King Gold', 'Leather', 'Magic Gold', 'Metal', 'Resin', 'Sapphire', 'Titanium'];
// const colors = ['black', 'white', 'brown', 'silver', 'gold', 'blue', 'red', 'beige'];
// const shapes = ['Round', 'Square', 'Rectangle', 'Other'];
// const glass_materials = ['Sapphire glass', 'Crystal glass', 'Mineral glass', 'regular glass'];
// const movementTypes = ['quartz', 'mechanical', 'automatic'];
// const batteries = ['Renata 371 1.55v Silver Oxide', 'Renata 456 1.60v Silver Oxide', 'Renata 589 1.55v Silver Oxide', 'Renata 123 1.60v Silver Oxide ']
// const storageMaterial = ['Carbon', 'Ceramic', 'Leather'];
// const storageStyles = ['Case', 'Pouch', 'Roll'];
// const collection = ['new', 'all'];
// console.log('products')

// while (amount--) {
//   // 85% chance for admin user
//   const boolean = Math.random() < 0.85;
//   products.push({
//     title: faker.commerce.productName(),
//     brand: _.sample(brands),
//     price: faker.commerce.price(30, 3000, 2, '€'),
//     description: faker.lorem.paragraph(5),
//     stock: boolean, 
//     watch_display_length: faker.random.number({min: 30, max: 80, precision:2}),
//     watch_thickness: faker.random.number({min: 10, max: 30, precision:2}),
//     watch_length: faker.random.number({min: 140, max: 300, precision:2}),
//     watch_width: faker.random.number({min: 16, max: 30, precision:2}),
//     case_material: _.sample(watchMaterial),
//     case_color: _.sample(colors),
//     case_width: faker.random.number({min: 20, max: 50, precision:2}),
//     case_length:faker.random.number({min: 20, max: 50, precision:2}),
//     case_thickness: faker.random.number({min: 6, max: 12, precision:2}),
//     case_shape: _.sample(shapes),
//     glass_material: _.sample(glass_materials),
//     glass_opening_diameter: faker.random.number({min: 26, max: 50, precision:2}),
//     band_material: _.sample(watchMaterial),
//     band_color: _.sample(colors),
//     band_width: faker.random.number({min: 16, max: 40, precision:2}),
//     circumference_range: `min. ${faker.random.number({min: 100, max: 200, precision:2})} - max. ${faker.random.number({min: 200, max: 300, precision:2})}`,
//     movement_type: _.sample(movementTypes),
//     battery: _.sample(batteries),
//     battery_life: faker.random.number({min: 60, max: 200}),
//     weight: faker.random.number({min: 50, max: 120, precision:2}),
//     water_resistance: faker.random.number({min: 5, max: 50}),
//     storage_material: _.sample(storageMaterial), 
//     storage_color: _.sample(colors), 
//     storage_width: faker.random.number({min: 60, max: 400, precision:2}),
//     storage_length: faker.random.number({min: 60, max: 800, precision:2}),
//     storage_thickness: faker.random.number({min: 100, max: 400, precision:2}),
//     capacity: faker.random.number({min: 1, max: 16}),
//     storage_style: _.sample(storageStyles),
//     collection: _.sample(collection), 
//     createdAt: new Date(),
//     updatedAt: new Date(), 
//   })
// }

// export default {
//   up: async (queryInterface, Sequelize) => {
//     console.log('product')
//     await queryInterface.bulkInsert(
// 			"Products", products, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkDelete('Products', null, {});
//   },
// };
