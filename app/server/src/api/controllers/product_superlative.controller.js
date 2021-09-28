import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all product_superlatives
*/
const getProduct_superlatives = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get product_superlatives from database
    const product_superlatives = await database.Product_superlative.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: product_superlatives,
      totalPages: Math.ceil(product_superlatives.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific product_superlative
*/
const getProduct_superlativeById = async (req, res, next) => {
  try {
    // Get product_superlativeId parameter
    const { product_superlativeId } = req.params;
    // Get specific product_superlative
    const product_superlative = await database.Product_superlative.findAll({
      where: {
        id: product_superlativeId
      }
    });
    // Send response
    res.status(200).json(product_superlative);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific product_superlative by productId
*/
const getProduct_superlativeByproductId = async (req, res, next) => {
  try {
    // Get product_superlativeId parameter
    const { productId } = req.params;
    // Get specific product_superlative
    const product_superlatives = await database.Product_superlative.findAll({
      where: {
        ProductId: productId
      }
    });
    // Send response
    res.status(200).json(product_superlatives);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new product_superlative
 */
const addProduct_superlative = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Product_superlative.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific product_superlative
 */

const updateProduct_superlative = async (req, res, next) => {
  try {
    // Get product_superlativeId parameter
		const { product_superlativeId } = req.params;
		// Get specific product_superlative from database
		const product_superlative = await database.Product_superlative.findByPk(product_superlativeId);

		if (product_superlative === null) {
			throw new HTTPError(`Could not found the product_superlative with id ${product_superlativeId}!`, 404);
		}

		// Update a specific product_superlative
		const model = req.body;
		const updatedProduct_superlative = await database.Product_superlative.update(model, {
			where: {
				id: product_superlativeId,
			},
		});

		// Send response
		res.status(200).json(updatedProduct_superlative);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete an product_superlative
 * 
 */

const deleteProduct_superlative = async (req, res, next) => {
  try {
    // Get product_superlativeId parameter
		const { product_superlativeId } = req.params;
		// Get specific product_superlative from database
		const product_superlative = await database.Product_superlative.findByPk(product_superlativeId);

		if (product_superlative === null) {
			throw new HTTPError(`Could not found the order with id ${orderId}!`, 404);
		}

		// Delete a product_superlative with specified id
		const message = await database.Product_superlative.destroy({
			where: {
				id: product_superlativeId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getProduct_superlativeById,
  getProduct_superlativeByproductId,
  getProduct_superlatives,
  addProduct_superlative,
  updateProduct_superlative,
  deleteProduct_superlative
};