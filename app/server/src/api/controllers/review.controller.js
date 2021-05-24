import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all reviews
*/
const getReviews = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get reviews from database
    const reviews = await database.Review.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: reviews,
      totalPages: Math.ceil(reviews.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific review
*/
const getReviewById = async (req, res, next) => {
  try {
    // Get reviewId parameter
    const { reviewId } = req.params;
    // Get specific review
    const review = await database.Review.findAll({
      where: {
        id: reviewId
      }
    });
    // Send response
    res.status(200).json(review);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new review
 */
const addReview = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Review.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific review
 */

const updateReview = async (req, res, next) => {
  try {
    // Get reviewId parameter
		const { reviewId } = req.params;
		// Get specific review from database
		const review = await database.Review.findByPk(reviewId);

		if (review === null) {
			throw new HTTPError(`Could not found the review with id ${reviewId}!`, 404);
		}

		// Update a specific review
		const model = req.body;
		const updatedReview = await database.Review.update(model, {
			where: {
				id: reviewId,
			},
		});

		// Send response
		res.status(200).json(updatedReview);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a review
 * 
 */

const deleteReview = async (req, res, next) => {
  try {
    // Get reviewId parameter
		const { reviewId } = req.params;
		// Get specific review from database
		const review = await database.Review.findByPk(reviewId);

		if (review === null) {
			throw new HTTPError(`Could not found the review with id ${reviewId}!`, 404);
		}

		// Delete a review with specified id
		const message = await database.Review.destroy({
			where: {
				id: reviewId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getReviewById,
  getReviews,
  addReview,
  updateReview,
  deleteReview
};