import { handleHTTPError } from '../../utils';
import database from '../../database';


/**
 * Creates a new category
 */
const addWishlist_has_products = async (req, res, next) => {
  try {

    // const { productId, wishlistId } = req.params;
    // Get body from response
		const model = req.body;
    console.log(model)
		// Create a post
		// const createdModel = await database.Wishlist_has_products.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}




export {
  addWishlist_has_products,
};