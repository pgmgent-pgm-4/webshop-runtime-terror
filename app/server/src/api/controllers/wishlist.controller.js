import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all wishlists
*/
const getWishlists = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get wishlists from database
    const wishlists = await database.Wishlist.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: wishlists,
      totalPages: Math.ceil(wishlists.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific wishlist
*/
const getWishlistById = async (req, res, next) => {
  try {
    // Get wishlistId parameter
    const { wishlistId } = req.params;
    // Get specific wishlist
    const wishlist = await database.Wishlist.findAll({
      where: {
        id: wishlistId
      }
    });
    // Send response
    res.status(200).json(wishlist);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get all wishlists with a specific userId
*/
const getWishlistByUserId = async (req, res, next) => {
  try {
    // Get productId parameter
    const { userId } = req.params;
    console.log(userId)
    // Get all wishlists
    const wishlists = await database.Wishlist.findOne({
      where: {
        UserId: userId,
      }
    });
    // Send response
    res.status(200).json(wishlists);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/**
 * Creates a new wishlist
 */
const addWishlist = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Wishlist.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific wishlist
 */

const updateWishlist = async (req, res, next) => {
  try {
    // Get wishlistId parameter
		const { wishlistId } = req.params;
		// Get specific wishlist from database
		const wishlist = await database.Wishlist.findByPk(wishlistId);

		if (wishlist === null) {
			throw new HTTPError(`Could not found the wishlist with id ${wishlistId}!`, 404);
		}

		// Update a specific wishlist
		const model = req.body;
		const updatedWishlist = await database.Wishlist.update(model, {
			where: {
				id: wishlistId,
			},
		});

		// Send response
		res.status(200).json(updatedWishlist);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a wishlist
 * 
 */

const deleteWishlist = async (req, res, next) => {
  try {
    // Get wishlistId parameter
		const { wishlistId } = req.params;
		// Get specific wishlist from database
		const wishlist = await database.Wishlist.findByPk(wishlistId);

		if (wishlist === null) {
			throw new HTTPError(`Could not found the wishlist with id ${wishlistId}!`, 404);
		}

		// Delete a wishlist with specified id
		const message = await database.Wishlist.destroy({
			where: {
				id: wishlistId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getWishlistById,
  getWishlistByUserId,
  getWishlists,
  addWishlist,
  updateWishlist,
  deleteWishlist
};