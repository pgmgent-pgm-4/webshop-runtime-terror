import { handleHTTPError } from '../../utils';
import database from '../../database';
import { Op } from 'sequelize';


/*
Get all orders
*/
const getOrders = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get orders from database
    const orders = await database.Order.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: orders,
      totalPages: Math.ceil(orders.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get all orders from a specific user
*/
const getOrdersById = async (req, res, next) => {
  try {
    // Get orderId parameter
    const { userId } = req.params;

    // Get orders from database
    const orders = await database.Order.findAll({
      where: {
        UserId: userId,
        order_state: {
          [Op.not]: 'shopping bag'
        }
      }, 
      include: {
        model: database.Order_products,
        include: {
          model: database.Product,
        }
      }
    });
    // Send response
    res.status(200).json({orders});
  } catch (error) {
    handleHTTPError(error, next);
  }
};



/*
Get a specific order
*/
const getOrderById = async (req, res, next) => {
  try {
    // Get orderId parameter
    const { orderId } = req.params;
    // Get specific order
    const order = await database.Order.findAll({
      where: {
        id: orderId
      }
    });
    // Send response
    res.status(200).json(order);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new order
 */
const addOrder = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Order.create(model);
		// Send response
		res.status(200).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific order
 */

const updateOrder = async (req, res, next) => {
  try {
    // Get orderId parameter
		const { orderId } = req.params;
		// Get specific order from database
		const order = await database.Order.findByPk(orderId);

		if (order === null) {
			throw new HTTPError(`Could not found the order with id ${orderId}!`, 404);
		}

		// Update a specific order
		const model = req.body;
		const updatedOrder = await database.Order.update(model, {
			where: {
				id: orderId,
			},
		});

		// Send response
		res.status(200).json(updatedOrder);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete an order
 * 
 */

const deleteOrder = async (req, res, next) => {
  try {
    // Get orderId parameter
		const { orderId } = req.params;
		// Get specific order from database
		const order = await database.Order.findByPk(orderId);

		if (order === null) {
			throw new HTTPError(`Could not found the order with id ${orderId}!`, 404);
		}

		// Delete a order with specified id
		const message = await database.Order.destroy({
			where: {
				id: orderId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getOrderById,
  getOrdersById,
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder
};