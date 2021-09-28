import  express from 'express';
let  router = express.Router();
import fetch from 'node-fetch';
import { EnvironmentVariables } from '../config';
import { authMiddleware} from '../middleware';


const baseUrl = `http://${EnvironmentVariables.HOSTNAME}:${EnvironmentVariables.PORT}/api`

router.get('/', async  function(req, res, next) {
  const response = await fetch(`${baseUrl}/newCollectionProducts`);
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'Home',
    watches
  }

  res.render('index.njk', data)
})

router.get('/products/:productId', async  function(req, res, next) {
  // Get productId parameter
  const { productId } = req.params;

  console.log(productId);
  const details = await fetch(`${baseUrl}/products/${productId}`);
  const productDetails= await details.json();
  const colors = await fetch(`${baseUrl}/product_colorsByProductId/${productId}`);
  const productColors= await colors.json();
  const superlatives = await fetch(`${baseUrl}/product/product_superlatives/${productId}`);
  const productSuperlatives= await superlatives.json();
  const related = await fetch(`${baseUrl}/productsRandomly?page=0&size=5`);
  console.log(related);
  let relatedProducts= await related.json();
  relatedProducts = relatedProducts.content.rows;
  console.log(relatedProducts);
  
  const rev = await fetch(`${baseUrl}/product/reviews/${productId}`);
  let reviews= await rev.json();
  let users;
  await Promise.all(
    reviews.map(review => fetch(`${baseUrl}/users/${review.UserId}`)) 
  ).then(values => {
    return Promise.all(values.map(v => v.json()));
  }).then(values => {
    users = [].concat.apply([], values);
  }).catch(e => {
    console.log(e.message);
  })
  reviews = await reviews.map(review => {
    let obj = users.find(user => user.id === review.UserId);
    review["username"] = obj.username;
    review["email"] = obj.email;
    return review;
  });


  let  data = {
    base:  'base.njk',
    title: 'ProductDetail',
    productDetails,
    productColors,
    productSuperlatives,
    reviews,
    relatedProducts
  }
 
  res.render('./productDetail/productDetail.njk', data)
})



router.get('/men', async  function(req, res, next) {
  const response = await fetch(`${baseUrl}/productsCategory/1`);
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'men',
    watches,
  }

  res.render('./products/men.njk', data)
})

router.get('/women', async  function(req, res, next) {
  const response = await fetch(`${baseUrl}/productsCategory/2`);
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'women',
    watches,
  }

  res.render('./products/women.njk', data)
})

router.get('/watch-storages', async  function(req, res, next) {
  const response = await fetch(`${baseUrl}/productsCategory/3`);
  const storages = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'watch storages',
    storages,
  }

  res.render('./products/storages.njk', data)
})


router.get('/bands', async  function(req, res, next) {
  // const { brands, colors, min, max } = req.query;
  // console.log(brands);
  // let brandsQuery = '';
  // let colorsQuery = '';
  // if (typeof brands !== 'undefined') {
  //   console.log(typeof brands);
  //   if (typeof brands === 'array') {
  //     brandsQuery = brands.join('&brands=');
  //     brandsQuery = 'brands=' + brandsQuery;
  //     console.log(brandsQuery)
  //   } else {
  //     brandsQuery = 'brands=' + brandsQuery;
  //   }
  
  // }
  // if (typeof brands !== 'undefined') {

  //   if (colors.length > 0) {
  //     colorsQuery = colors.join('&colors=')
  //     colorsQuery = 'colors=' + colorsQuery;
  //     console.log(colorsQuery)
  //   }
  //   if (colors) {
  //     colorsQuery = 'colors=' + colorsQuery;
  //   }
  // }
  // console.log(min)
  // console.log(max)
  const response = await fetch(`${baseUrl}/productsCategory/4`);
  const bands = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'bands',
    bands,
  }

  res.render('./products/bands.njk', data)
})

router.get('/outlet', async  function(req, res, next) {
  const response = await fetch(`${baseUrl}/productsPromotions`);
  const promotions = await response.json();
  const newPrices = promotions.map(promotion => {
    const price = promotion.price
    const price2 = price.substring(1)
    let newPrice = parseFloat(price2) * parseFloat(promotion.Promotion.discount_percent) / 100;
    newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
    return newPrice;
  })
  let i = 0;
  promotions.forEach(promotion => {
    promotion.newPrice = newPrices[i]
    i++;
  }) 
  let  data = {
    base:  'base.njk',
    title: 'outlet',
    promotions,
  }

  res.render('./products/outlet.njk', data)
})

router.get('/', async  function(req, res, next) {
  console.log(`${baseUrl}/newCollectionProducts`)
  const response = await fetch(`${baseUrl}/newCollectionProducts`);
  const watches = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'Home',
    watches
  }

  res.render('index.njk', data)
})

router.get('/contact', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Contact'
  }

  res.render('./contact/contact.njk', data)
})

router.get('/about', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'About'
  }

  res.render('./about/about.njk', data)
})

router.get('/registration', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Registration'
  }

  res.render('./registration/registration.njk', data)
})


router.get('/login', async  function(req, res, next) {
  let  data = {
    base:  'base.njk',
    title: 'Login'
  }

  res.render('./login/login.njk', data)
})


router.get('/profile/:userId',  async  function(req, res, next) {
  const { userId } = req.params;
  const response = await fetch(`${baseUrl}/user/profiles/${userId}`);
  const profile = await response.json();
  let  data = {
    base:  'base.njk',
    title: 'Profile',
    profile
  }

  res.render('./profile/profile.njk', data);
})


router.get('/profile/orders/:userId',  async  function(req, res, next) {
  const { userId } = req.params;
  console.log(userId);
  const response = await fetch(`${baseUrl}/orders/user/${userId}`);
  const orders = await response.json();
  console.log('orders', orders);
  let  data = {
    base:  'base.njk',
    title: 'Orders',
    orders: orders.orders
  }

  res.render('./orders/order.njk', data);
})

router.get('/profile/wishlist/:userId',  async  function(req, res, next) {
  const { userId } = req.params;
  console.log(userId);
  const response = await fetch(`${baseUrl}/users/wishlist/${userId}`);
  const wishlist= await response.json();
  console.log('wishlist', wishlist);
  const wishlistId = wishlist.id;
  const resp = await fetch(`${baseUrl}/wishlist/products/${wishlistId}`);
  const wishlistProducts = await resp.json();
  console.log(wishlistProducts);
  let data = {
    base:  'base.njk',
    title: 'Wishlist',
    wishlistProducts
  }

  res.render('./wishlist/wishlist.njk', data);
})


module.exports = router











// const { userId } = req.params;
//   console.log(userId);
//   const o = [];
//   const response = await fetch(`${baseUrl}/orders/user/${userId}`);
//   const orders = await response.json();
//   console.log('orders', orders);
//   const test = orders.orders.map( async (order) => {
//     // console.log('hello', order)
//     const orderId = order.id;
//     // console.log(orderId);
//     // console.log(`${baseUrl}/order_products/order/${orderId}`);
//     const response = await fetch(`${baseUrl}/order_products/order/${orderId}`);
//     const order_products = await response.json();
//     // order.orderProducts = order_products
//     console.log('order_products', order_products);
//     order_products.forEach( async (order_product) => {
//       const productId = order_product.ProductId;
//       const response = await fetch(`${baseUrl}/products/${productId}`);
//       const product = await response.json();
//       console.log('product', product);
//       // order_product.prod = product
//     });
//     o.push(order);
//   });
//   // console.log(orders);
//   // console.log('nu', o);