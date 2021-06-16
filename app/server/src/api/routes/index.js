/*
Import packages
*/
import express  from 'express';

/*
Import custom packages
*/
import * as  userController from '../controllers/user.controller.js';
import * as categoryController from '../controllers/category.controller.js';
import * as orderController from '../controllers/order.controller.js';
import * as paymentController from '../controllers/payment.controller.js';
// import * as product_mediaController from '../controllers/product_media.controller.js';
import * as product_superlativeController from '../controllers/product_superlative.controller.js';
import * as productController from '../controllers/product.controller.js';
import * as order_productController from '../controllers/order_products.controller.js';
import * as product_colorController from '../controllers/product_color.controller.js';
import * as profileController from '../controllers/profile.controller.js';
import * as promotionController from '../controllers/promotion.controller.js';
import * as reviewController from '../controllers/review.controller.js';
import * as wishlistController from '../controllers/wishlist.controller.js';
import * as wishlist_has_productsController from '../controllers/wishlist_has_products.controller.js';
import pagination from '../../utils/pagination.js';
// import { validationUsers } from '../validation/user.validation.js';
import { body  } from 'express-validator';

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/
   



router.get('/users',pagination, userController.getUsers);



router.get('/users/:userId', userController.getUserById);



router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);



/**
 * Categories routes
 */

router.get('/categories', pagination, categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.post('/categories', categoryController.addCategory);
router.put('/categories/:categoryId', categoryController.updateCategory);
router.delete('/categories/:categoryId', categoryController.deleteCategory);


/**
 * Orders routes
 */


/**
 * @swagger
 * /api/orders:
 *  get:
 *    summary: Returns a list of orders
 *    tags: [Orders]
 *    description: Retrieve a list of orders.
 *    responses:
 *      200:
 *        description: The list of orders
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Orders'
 *      404:
 *        description: Could not get the orders!  
 *        
 */
router.get('/orders',pagination, orderController.getOrders);

/**
 * @swagger
 * /api/orders/{userId}:
 *  get:
 *    summary: Returns a list of orders based on userId
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: user id.
 *    responses:
 *      200:
 *        description: The orders by userId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Orders'
 *      404:
 *        description: Could not found the order with userId!  
 *        
 */
router.get('/orders/user/:userId', orderController.getOrdersById);

/**
 * @swagger
 * /api/orders/{id}:
 *  get:
 *    summary: Returns a specific order
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: order id.
 *    responses:
 *      200:
 *        description: The order by orderId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Orders'
 *      404:
 *        description: Could not found the order with id {id}!  
 *        
 */
router.get('/orders/:orderId', orderController.getOrderById);

/**
 * @swagger
 * /api/orders:
 *  post:
 *    summary: Create a new order
 *    tags: [Orders]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Orders'
 *    responses:
 *      200:
 *        description: Successful added order
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Orders'
 *      500:
 *        description: Could not add order!  
 *        
 */
router.post('/orders', orderController.addOrder);

 /**
 * @swagger
 * /api/orders/{id}:
 *  put:
 *    summary: Update an order by the id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Orders'
 *    responses:
 *      200:
 *        description: Successful updated order
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: integer
 *      404:
 *        description: The order was not updated!  
 *        
 */
router.put('/orders/:orderId', orderController.updateOrder);

 /**
 * @swagger
 * /api/orders/{id}:
 *  delete:
 *    summary: Remove an order based on order Id
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the order id
 *    responses:
 *      200:
 *        description: The order was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: integer
 *      404:
 *        description: The order was not found!  
 *        
 */
router.delete('/orders/:orderId', orderController.deleteOrder);


/**
 * Payments routes
 */

router.get('/payments',pagination, paymentController.getPayments);
router.get('/payments/:paymentId', paymentController.getPaymentById);
router.post('/payments', paymentController.addPayment);
router.put('/payments/:paymentId', paymentController.updatePayment);
router.delete('/payments/:paymentId', paymentController.deletePayment);


/**
 * Product_medias routes
 */

// router.get('/product_medias', pagination, product_mediaController.getProduct_medias);
// router.get('/product_medias/:product_mediaId', product_mediaController.getProduct_mediaById);
// router.post('/product_medias', product_mediaController.addProduct_media);
// router.put('/product_medias/:product_mediaId', product_mediaController.updateProduct_media);
// router.delete('/product_medias/:product_mediaId', product_mediaController.deleteProduct_media);


 /**
 * Product_superlatives routes
 */

router.get('/product_superlatives', pagination, product_superlativeController.getProduct_superlatives);
router.get('/product_superlatives/:product_superlativeId', product_superlativeController.getProduct_superlativeById);
router.get('/product/product_superlatives/:productId', product_superlativeController.getProduct_superlativeByproductId);
router.post('/product_superlatives', product_superlativeController.addProduct_superlative);
router.put('/product_superlatives/:product_superlativeId', product_superlativeController.updateProduct_superlative);
router.delete('/product_superlatives/:product_superlativeId', product_superlativeController.deleteProduct_superlative);
 
 /**
 * Products routes
 */

 
/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Returns a list of products
 *    tags: [Products]
 *    description: Retrieve a list of products.
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not get the Products!  
 *        
 */
router.get('/products', pagination, productController.getProducts);

/**
 * @swagger
 * /api/productsRandomly:
 *  get:
 *    summary: Returns a list of products randomly
 *    tags: [Products]
 *    description: Retrieve a list of products randomly.
 *    responses:
 *      200:
 *        description: The list of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not get the Products!  
 *        
 */
router.get('/productsRandomly', pagination, productController.getProductsRandomly);

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Returns a specific product
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: product id.
 *    responses:
 *      200:
 *        description: The product by productId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not found the product with id!  
 *        
 */
router.get('/products/:productId', productController.getProductById);

/**
 * @swagger
 * /api/newCollectionProducts:
 *  get:
 *    summary: Returns a list of products with new collection
 *    tags: [Products]
 *    description: Retrieve a list of new collection products.
 *    responses:
 *      200:
 *        description: The list of new collection products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not get the new collection Products!  
 *        
 */
router.get('/newCollectionProducts', productController.getNewCollectionProducts);

/**
 * @swagger
 * /api/productsCategory/{categoryId}:
 *  get:
 *    summary: Returns a specific product by categoryId
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: CategoryId
 *        schema:
 *          type: string
 *        required: true
 *        description: category id.
 *    responses:
 *      200:
 *        description: The products by categoryId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not found the product with categoryId!  
 *        
 */
router.get('/productsCategory/:categoryId', productController.getProductByCategoryId);

/**
 * @swagger
 * /api/wishlist/products/{wishlistId}:
 *  get:
 *    summary: Returns products by wishlistId
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: wishlistId
 *        schema:
 *          type: string
 *        required: true
 *        description: wishlist id.
 *    responses:
 *      200:
 *        description: The products by wishlistId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not found the product with wishlistId!  
 *        
 */
router.get('/wishlist/products/:wishlistId', productController.getProductsByWishlistId);

/**
 * @swagger
 * /api/productsPromotions:
 *  get:
 *    summary: Returns a list of products in promotion
 *    tags: [Products]
 *    description: Retrieve a list of products in promotion.
 *    responses:
 *      200:
 *        description: The list of products in promotion
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Products'
 *      404:
 *        description: Could not get the Products in promotions!  
 *        
 */
router.get('/productsPromotions', productController.getProductsByPromotion);

 /**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Create a new product
 *    tags: [Products]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        description: Successful added product
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Products'
 *      500:
 *        description: Could not add product!  
 *        
 */
router.post('/products', productController.addProduct);

  /**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Update a product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Products'
 *    responses:
 *      200:
 *        description: Successful updated product
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: integer
 *      404:
 *        description: The product was not updated!  
 *        
 */
router.put('/products/:productId', productController.updateProduct);

 /**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Remove a product based on product Id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the product id
 *    responses:
 *      200:
 *        description: The product was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: integer
 *      404:
 *        description: The product was not found!  
 *        
 */
router.delete('/products/:productId', productController.deleteProduct);

/**
 * Order_products routes
 */

 router.get('/order_products', pagination, order_productController.getOrder_products);
 router.get('/order_products/:order_productId', order_productController.getOrder_productById);
 router.get('/order_products/order/:orderId', order_productController.getOrder_productByOrderId);
 router.post('/order_products', order_productController.addOrder_product);
 router.put('/order_products/:order_productId', order_productController.updateOrder_product);
 router.delete('/order_products/:order_productId', order_productController.deleteOrder_product);


/**
 * Product_colors routes
 */

router.get('/product_colors', pagination, product_colorController.getProduct_colors);
router.get('/product_colors/:product_colorId', product_colorController.getProduct_colorById);
router.get('/product_colorsByProductId/:productId', product_colorController.getProduct_colorByProductId);
router.post('/product_colors', product_colorController.addProduct_color);
router.put('/product_colors/:product_colorId', product_colorController.updateProduct_color);
router.delete('/product_colors/:product_colorId', product_colorController.deleteProduct_color);

/**
 * Profiles routes
 */

 router.get('/profiles', pagination, profileController.getProfiles);
 router.get('/profiles/:profileId', profileController.getProfileById);
 router.get('/user/profiles/:userId', profileController.getProfileByUserId);
 router.post('/profiles', profileController.addProfile);
 router.put('/profiles/:profileId', profileController.updateProfile);
 router.delete('/profiles/:profileId', profileController.deleteProfile);

/**
 * Promotions routes
 */

 router.get('/promotions', pagination, promotionController.getPromotions);
 router.get('/promotions/:promotionId', promotionController.getPromotionById);
 router.post('/promotions', promotionController.addPromotion);
 router.put('/promotions/:promotionId', promotionController.updatePromotion);
 router.delete('/promotions/:promotionId', promotionController.deletePromotion);

/**
 * Reviews routes
 */



/**
 * @swagger
 * /api/reviews:
 *  get:
 *    summary: Returns a list of reviews
 *    tags: [Reviews]
 *    description: Retrieve a list of reviews.
 *    responses:
 *      200:
 *        description: The list of reviews
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reviews'
 *      404:
 *        description: Could not get the orders!
 *        
 */
 router.get('/reviews', pagination, reviewController.getReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *  get:
 *    summary: Returns a specific review
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: reviews id.
 *    responses:
 *      200:
 *        description: The review by reviewId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reviews'
 *      404:
 *        description: Could not found the review with id {id}!  
 *        
 */
 router.get('/reviews/:reviewId', reviewController.getReviewById);

 /**
 * @swagger
 * /api/product/reviews/{productId}:
 *  get:
 *    summary: Returns a all reviews based on productId
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema:
 *          type: string
 *        required: true
 *        description: The productId.
 *    responses:
 *      200:
 *        description: The reviews by productId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reviews'
 *      404:
 *        description: Could not found the reviews with productId {productId}!  
 *        
 */
 router.get('/product/reviews/:productId', reviewController.getReviewByProductId);

 /**
 * @swagger
 * /api/users/reviews/{userId}:
 *  get:
 *    summary: Returns a all reviews based on userId
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: The userId.
 *    responses:
 *      200:
 *        description: The reviews by userId
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reviews'
 *      404:
 *        description: Could not found the reviews with userId {userId}!  
 *        
 */
 router.get('/users/reviews/:userId', reviewController.getReviewByUserId);

 /**
 * @swagger
 * /api/reviews:
 *  post:
 *    summary: Create a new review
 *    tags: [Reviews]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reviews'
 *    responses:
 *      200:
 *        description: Successful added review
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reviews'
 *      500:
 *        description: Could not add review!  
 *        
 */
 router.post('/reviews', reviewController.addReview);

  /**
 * @swagger
 * /api/reviews/{id}:
 *  put:
 *    summary: Update a review by the id
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The review id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reviews'
 *    responses:
 *      200:
 *        description: Successful updated review
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: integer
 *      404:
 *        description: The review was not updated!  
 *        
 */
 router.put('/reviews/:reviewId', reviewController.updateReview);

 /**
 * @swagger
 * /api/reviews/{id}:
 *  delete:
 *    summary: Remove a review based on review Id
 *    tags: [Reviews]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the review id
 *    responses:
 *      200:
 *        description: The reviews was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: integer
 *      404:
 *        description: The review was not found!  
 *        
 */
 router.delete('/reviews/:reviewId', reviewController.deleteReview);


 /**
 * Wishlists routes
 */

  router.get('/wishlists', pagination, wishlistController.getWishlists);
  router.get('/wishlists/:wishlistId', wishlistController.getWishlistById);
  router.get('/users/wishlist/:userId', wishlistController.getWishlistByUserId);
  router.post('/wishlists', wishlistController.addWishlist);
  router.put('/wishlists/:wishlistId', wishlistController.updateWishlist);
  router.delete('/wishlists/:wishlistId', wishlistController.deleteWishlist);


  router.post('/wishlist_has_products', wishlist_has_productsController.addWishlist_has_products);

export default router;




/**
 * @swagger
 * components:
 *  schemas:
 *    Reviews:
 *      type: object
 *      properties:
 *        id: 
 *          type: integer
 *          description: Id of the review
 *        rating: 
 *          type: integer
 *          description: the rating of a review
 *        title:
 *          type: string
 *          description: The title of a review
 *        text:
 *          type: string
 *          description: The text of a review
 *        createdAt:
 *          type: Date
 *          description: The created date of the review
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the review
 *        ProductId:
 *          type: integer
 *          description: The productId
 *        UserId:
 *          type: integer
 *          description: The userId
 *      example:
 *        id: 1
 *        rating: 5
 *        title: top product
 *        text: super product, I love it
 *        createdAt: 2021-06-15 16:41:46.594 +00:00
 *        updatedAt: 2021-06-15 16:41:46.594 +00:00
 *        ProductId: 1
 *        UserId: 1
*/



/**
 * @swagger
 * components:
 *  schemas:
 *    Orders:
 *      type: object
 *      properties:
 *        id: 
 *          type: integer
 *          description: Id of the order
 *        order_number: 
 *          type: integer
 *          description: the order number of an order
 *        order_state:
 *          type: string
 *          description: the state of the order
 *        delivery_charge:
 *          type: number
 *          format: float
 *          description: The delivery charge for the order
 *        total_price:
 *          type: number
 *          format: float
 *          description: The total price of the order
 *        delivery_date:
 *          type: Date
 *          description: The delivery date of the order
 *        createdAt:
 *          type: Date
 *          description: The created date of the order
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the order
 *        UserId:
 *          type: integer
 *          description: The userId
 *      example:
 *        id: 1
 *        order_number: 5
 *        order_state: shopping bag
 *        delivery_charge: 56.0
 *        total_price: 368.0
 *        delivery_date: 2021-06-15 16:41:46.594 +00:00
 *        createdAt: 2021-06-15 16:41:46.594 +00:00
 *        updatedAt: 2021-06-15 16:41:46.594 +00:00
 *        UserId: 1
*/



/**
 * @swagger
 * components:
 *  schemas:
 *    Products:
 *      type: object
 *      properties:
 *        id: 
 *          type: integer
 *          description: Id of the product
 *        title: 
 *          type: string
 *          description: the title of the product
 *        brand:
 *          type: string
 *          description: the brand of the product
 *        image:
 *          type: string
 *          description: The image of  the product
 *        price:
 *          type: number
 *          format: float
 *          description: The price of the product
 *        description:
 *          type: string
 *          description: The description of the product
 *        stock:
 *          type: boolean
 *          description: In stock
 *        watch_display_length: 
 *          type: number
 *          format: float
 *          description: The watch display length of the product
 *        watch_thickness:
 *          type: number
 *          format: float
 *          description: The watch thickness of the product
 *        watch_length:
 *          type: number
 *          format: float
 *          description: The watch length of the product
 *        watch_width:
 *          type: number
 *          format: float
 *          description: The watch width of the product
 *        case_material:
 *          type: string
 *          description: The case material of the product
 *        case_color: 
 *          type: string
 *          description: The case color of the product
 *        case_width: 
 *          type: number
 *          format: float
 *          description: The case width of the product
 *        case_length: 
 *          type: number
 *          format: float
 *          description: The case length of the product
 *        case_thickness:
 *          type: number
 *          format: float
 *          description: The case thickness of the product
 *        case_shape: 
 *          type: string
 *          description: The case shape of the product
 *        glass_material:
 *          type: string
 *          description: The glass material of the product
 *        glass_opening_diameter:
 *          type: number
 *          format: float
 *          description: The glass openings diameter of the product
 *        band_material:
 *          type: string
 *          description: The band material of the product
 *        band_color:
 *          type: string
 *          description: The band color of the product
 *        band_width: 
 *          type: number
 *          format: float
 *          description: The band width of the product
 *        band_length: 
 *          type: number
 *          format: float
 *          description: The band length of the product
 *        circumference_range:
 *          type: string
 *          description: The circumference range of the product
 *        movement_type:
 *          type: string
 *          description: The movement type of the product
 *        battery: 
 *          type: string
 *          description: The battery of the product
 *        battery_life:
 *          type: number
 *          format: float
 *          description: The battery life of the product
 *        weight: 
 *          type: number
 *          format: float
 *          description: the weight of the product
 *        water_resistance:
 *          type: number
 *          format: float
 *          description: The water resistance of the product
 *        storage_material:
 *          type: string
 *          description: The storage material of the product
 *        storage_color:
 *          type: string
 *          description: The storage color of the product
 *        storage_width:
 *          type: number
 *          format: float
 *          description: The storage width of the product
 *        storage_length: 
 *          type: number
 *          format: float
 *          description: The storage length of the product
 *        storage_thickness:
 *          type: number
 *          format: float
 *          description: The storage thickness of the product
 *        capacity:
 *          type: integer
 *          description: The capacity of the product
 *        storage_style:
 *          type: string
 *          description: The storage style of the product
 *        collection:
 *          type: string
 *          description: The collection of the product 
 *        createdAt:
 *          type: Date
 *          description: The created date of the order
 *        updatedAt:
 *          type: Date
 *          description: The updated date of the order
 *      example:
 *        id: 1
 *        title: black band
 *        brand: omega
 *        image: bands__Omega__Beige_alligator_leather_band.png
 *        price: €790.00
 *        description: Molestias accusantium ut et saepe voluptas minima ut. Non sit nemo magni ut suscipit et ut magnam dolor. Fugit commodi eos dicta iusto culpa non reprehenderit dolorem. Ipsam qui blanditiis. Quaerat culpa est blanditiis fuga fugit
 *        stock: 1
 *        watch_display_length: 56.0
 *        watch_thickness: 38.0
 *        watch_length: 192.0
 *        watch_width: 24.0
 *        case_material: Carbon
 *        case_color: red
 *        case_width: 50.0
 *        case_length: 22.0
 *        case_thickness: 10.0
 *        case_shape: Round
 *        glass_material: Mineral glass
 *        glass_opening_diameter: 44.0
 *        band_material: Metal
 *        band_color: black
 *        band_width: 36.0
 *        band_length: 30.0
 *        circumference_range: min. 196 - max. 238
 *        movement_type: automatic
 *        battery: Renata 589 1.55v Silver Oxide
 *        battery_life: 164.0
 *        weight: 64.0
 *        water_resistance: 15.0
 *        storage_material: Carbon
 *        storage_width: beige
 *        storage_length: 368.0
 *        storage_thickness: 234.0
 *        capacity: 4.0
 *        storage_style: Roll
 *        collection: all
 *        createdAt: 2021-06-15 16:41:46.594 +00:00
 *        updatedAt: 2021-06-15 16:41:46.594 +00:00
*/