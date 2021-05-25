import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all payments
*/
const getPayments = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get payments from database
    const payments = await database.Payment.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: payments,
      totalPages: Math.ceil(payments.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific payment
*/
const getPaymentById = async (req, res, next) => {
  try {
    // Get paymentId parameter
    const { paymentId } = req.params;
    // Get specific payment
    const payment = await database.Payment.findAll({
      where: {
        id: paymentId
      }
    });
    // Send response
    res.status(200).json(payment);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new payment
 */
const addPayment = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Payment.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Update a specific payment
 */

const updatePayment = async (req, res, next) => {
  try {
    // Get paymentId parameter
		const { paymentId } = req.params;
		// Get specific payment from database
		const payment = await database.Payment.findByPk(paymentId);

		if (payment === null) {
			throw new HTTPError(`Could not found the payment with id ${paymentId}!`, 404);
		}

		// Update a specific payment
		const model = req.body;
		const updatedPayment = await database.Payment.update(model, {
			where: {
				id: paymentId,
			},
		});

		// Send response
		res.status(200).json(updatedPayment);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete an payment
 * 
 */

const deletePayment = async (req, res, next) => {
  try {
    // Get paymentId parameter
		const { paymentId } = req.params;
		// Get specific payment from database
		const payment = await database.Payment.findByPk(paymentId);

		if (payment === null) {
			throw new HTTPError(`Could not found the payment with id ${paymentId}!`, 404);
		}

		// Delete a payment with specified id
		const message = await database.Payment.destroy({
			where: {
				id: paymentId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getPaymentById,
  getPayments,
  addPayment,
  updatePayment,
  deletePayment
};