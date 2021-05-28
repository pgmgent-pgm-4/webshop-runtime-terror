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
import * as product_mediaController from '../controllers/product_media.controller.js';
import * as product_superlativeController from '../controllers/product_superlative.controller.js';
import * as productController from '../controllers/product.controller.js';
import * as product_colorController from '../controllers/product_color.controller.js';
import * as profileController from '../controllers/profile.controller.js';
import * as promotionController from '../controllers/promotion.controller.js';
import * as reviewController from '../controllers/review.controller.js';

import pagination from '../../utils/pagination.js';

/*
Make a router
*/
const router = express.Router();

/*
Routes
*/


/**
 * Users routes
 */
/**
 * @swagger
 * /api/users:
 *   get:
 *      summary: Retrieve a list of users
 *      description: Retrieve a list of users. Can be used to populate a list of users when prototyping or testing an API.*
 *      responses:
 *        200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 1
 *                       username:
 *                         type: string
 *                         description: The users username.
 *                         example: ph
 *                       email:
 *                          type: string
 *                          description: The users email
 *                          example: myEmail@hotmail.com
 *                       password:
 *                          type: string
 *                          description: The users password
 *                          example: myPassword123
 *        404:
 *          description: The user is not found 
 */
router.get('/users',pagination, userController.getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a specific user
 *     description: Retrieve a specific user. Can be used to find a specific user
 *     parameters:
 *         in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id 
 *     responses:
 *       200:
 *         description: The user details by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 1
 *                       username:
 *                         type: string
 *                         description: The users username.
 *                         example: ph
 *                       email:
 *                          type: string
 *                          description: The users email
 *                          example: myEmail@hotmail.com
 *                       password:
 *                          type: string
 *                          description: The users password
 *                          example: myPassword123
 *       404:
 *        description: Could not found the user with id {id}!
 */

router.get('/users/:userId', userController.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a specific user
 *     description: Create a specific user. Can be used to create different users
 *     parameters:
 *       in: body
 *       name: body
 *       schema:
 *         type: object
 *         properties:
 *           data:
 *             type: object
 *               properties:
 *                 username:
 *                 type: string
 *                 description: The users username.
 *                 example: ph
 *               email:
 *                 type: string
 *                 description: The users email
 *                 example: myEmail@hotmail.com
 *               password:
 *                 type: string
 *                 description: The users password
 *                 example: myPassword123
 *         required: true
 *         description: User object that needs to be added to the database 
 *     responses:
 *       200:
 *         description: The user details by id.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     username:
 *                       type: string
 *                       description: The users username.
 *                       example: ph
 *                     email:
 *                       type: string
 *                       description: The users email
 *                       example: myEmail@hotmail.com
 *                     password:
 *                       type: string
 *                       description: The users password
 *                       example: myPassword123
 *       404:
 *         description: Could not found the user with id {id}!
 */

router.post('/users', userController.addUser);
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

router.get('/orders',pagination, orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.post('/orders', orderController.addOrder);
router.put('/orders/:orderId', orderController.updateOrder);
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

router.get('/product_medias', pagination, product_mediaController.getProduct_medias);
router.get('/product_medias/:product_mediaId', product_mediaController.getProduct_mediaById);
router.post('/product_medias', product_mediaController.addProduct_media);
router.put('/product_medias/:product_mediaId', product_mediaController.updateProduct_media);
router.delete('/product_medias/:product_mediaId', product_mediaController.deleteProduct_media);


 /**
 * Product_superlatives routes
 */

router.get('/product_superlatives', pagination, product_superlativeController.getProduct_superlatives);
router.get('/product_superlatives/:product_superlativeId', product_superlativeController.getProduct_superlativeById);
router.post('/product_superlatives', product_superlativeController.addProduct_superlative);
router.put('/product_superlatives/:product_superlativeId', product_superlativeController.updateProduct_superlative);
router.delete('/product_superlatives/:product_superlativeId', product_superlativeController.deleteProduct_superlative);
 
 /**
 * Products routes
 */

router.get('/products', pagination, productController.getProducts);
router.get('/products/:productId', productController.getProductById);
router.post('/products', productController.addProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);
 
/**
 * Products routes
 */

router.get('/product_colors', pagination, product_colorController.getProduct_colors);
router.get('/product_colors/:product_colorId', product_colorController.getProduct_colorById);
router.post('/product_colors', product_colorController.addProduct_color);
router.put('/product_colors/:product_colorId', product_colorController.updateProduct_color);
router.delete('/product_colors/:product_colorId', product_colorController.deleteProduct_color);

/**
 * Profiles routes
 */

 router.get('/profiles', pagination, profileController.getProfiles);
 router.get('/profiles/:profileId', profileController.getProfileById);
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

 router.get('/reviews', pagination, reviewController.getReviews);
 router.get('/reviews/:reviewId', reviewController.getReviewById);
 router.post('/reviews', reviewController.addReview);
 router.put('/reviews/:reviewId', reviewController.updateReview);
 router.delete('/reviews/:reviewId', reviewController.deleteReview);



export default router;