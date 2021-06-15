import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all Order_products
*/
const getOrder_products = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get order_products from database
    const order_products = await database.Order_product.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: order_products,
      totalPages: Math.ceil(order_products.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific order_product
*/
const getOrder_productById = async (req, res, next) => {
  try {
    // Get order_product Id parameter
    const { order_productId } = req.params;
    // Get specific order_product
    const order_product = await database.Order_product.findAll({
      where: {
        id: order_productId
      }
    });
    // Send response
    res.status(200).json(order_product);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get a all order_products by orderId
*/
const getOrder_productByOrderId = async (req, res, next) => {
  try {
    // Get order_product Id parameter
    const { orderId } = req.params;
    // Get specific order_product
    const order_products = await database.Order_products.findAll({
      where: {
        OrderId: orderId
      }
    });
    // Send response
    res.status(200).json(order_products);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/**
 * Creates a new order_product
 */
const addOrder_product = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Order_product.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific order_product
 */

const updateOrder_product = async (req, res, next) => {
  try {
    // Get order_productId parameter
		const { order_productId } = req.params;
		// Get specific order_product from database
		const order_product = await database.Order_product.findByPk(order_productId);

		if (order_product === null) {
			throw new HTTPError(`Could not found the order_product with id ${order_productId}!`, 404);
		}

		// Update a specific order_product
		const model = req.body;
		const updatedOrder_product = await database.Order_product.update(model, {
			where: {
				id: order_productId,
			},
		});

		// Send response
		res.status(200).json(updatedOrder_product);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete an order_product
 * 
 */

const deleteOrder_product = async (req, res, next) => {
  try {
    // Get order_productId parameter
		const { order_productId } = req.params;
		// Get specific order_product from database
		const order_product = await database.Order_product.findByPk(order_productId);

		if (order_product === null) {
			throw new HTTPError(`Could not found the order_product with id ${order_productId}!`, 404);
		}

		// Delete a order_product with specified id
		const message = await database.Order_product.destroy({
			where: {
				id: order_productId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getOrder_productById,
  getOrder_productByOrderId,
  getOrder_products,
  addOrder_product,
  updateOrder_product,
  deleteOrder_product
};