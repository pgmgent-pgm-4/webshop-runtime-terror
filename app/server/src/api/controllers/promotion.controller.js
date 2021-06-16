import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all promotions
*/
const getPromotions = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get promotions from database
    const promotions = await database.Promotion.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: promotions,
      totalPages: Math.ceil(promotions.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific promotion
*/
const getPromotionById = async (req, res, next) => {
  try {
    // Get promotionId parameter
    const { promotionId } = req.params;
    // Get specific promotion
    const promotion = await database.Promotion.findAll({
      where: {
        id: promotionId
      }
    });
    // Send response
    res.status(200).json(promotion);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new promotion
 */
const addPromotion = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Promotion.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific promotion
 */

const updatePromotion = async (req, res, next) => {
  try {
    // Get promotionId parameter
		const { promotionId } = req.params;
		// Get specific promotion from database
		const promotion = await database.Promotion.findByPk(promotionId);

		if (promotion === null) {
			throw new HTTPError(`Could not found the promotion with id ${promotionId}!`, 404);
		}

		// Update a specific promotion
		const model = req.body;
		const updatedPromotion = await database.Promotion.update(model, {
			where: {
				id: promotionId,
			},
		});

		// Send response
		res.status(200).json(updatedPromotion);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a promotion
 * 
 */

const deletePromotion = async (req, res, next) => {
  try {
    // Get promotionId parameter
		const { promotionId } = req.params;
		// Get specific promotion from database
		const promotion = await database.Promotion.findByPk(promotionId);

		if (promotion === null) {
			throw new HTTPError(`Could not found the promotion with id ${promotionId}!`, 404);
		}

		// Delete a promotion with specified id
		const message = await database.Promotion.destroy({
			where: {
				id: promotionId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getPromotionById,
  getPromotions,
  addPromotion,
  updatePromotion,
  deletePromotion
};