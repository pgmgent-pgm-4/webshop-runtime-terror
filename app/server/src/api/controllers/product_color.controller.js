import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all product_colors
*/
const getProduct_colors = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get product_colors from database
    const product_colors = await database.Product_color.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: product_colors,
      totalPages: Math.ceil(product_colors.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific product_color
*/
const getProduct_colorById = async (req, res, next) => {
  try {
    // Get product_colorId parameter
    const { product_colorId } = req.params;
    // Get specific product_color
    const product_color = await database.Product_color.findAll({
      where: {
        id: product_colorId
      }
    });
    // Send response
    res.status(200).json(product_color);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get a all product_colors by product_id
*/
const getProduct_colorByProductId = async (req, res, next) => {
  try {
    // Get productId parameter
    const { productId } = req.params;
    // Get all product_colors by product_id
    const product_colors = await database.Product_color.findAll({
      where: {
        ProductId: productId      
      }
    });
    // Send response
    res.status(200).json(product_colors);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/**
 * Creates a new product_color
 */
const addProduct_color = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Product_color.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific product_color
 */

const updateProduct_color = async (req, res, next) => {
  try {
    // Get product_colorId parameter
		const { product_colorId } = req.params;
		// Get specific product_color from database
		const product_color = await database.Product_color.findByPk(product_colorId);

		if (product_color === null) {
			throw new HTTPError(`Could not found the product_color with id ${product_colorId}!`, 404);
		}

		// Update a specific product_color
		const model = req.body;
		const updatedProduct_color = await database.Product_color.update(model, {
			where: {
				id: product_colorId,
			},
		});

		// Send response
		res.status(200).json(updatedProduct_color);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a product_color
 * 
 */

const deleteProduct_color = async (req, res, next) => {
  try {
    // Get product_colorId parameter
		const { product_colorId } = req.params;
		// Get specific product_color from database
		const product_color = await database.Product_color.findByPk(product_colorId);

		if (product_color === null) {
			throw new HTTPError(`Could not found the product_color with id ${product_colorId}!`, 404);
		}

		// Delete a product_color with specified id
		const message = await database.Product_color.destroy({
			where: {
				id: product_colorId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getProduct_colorById,
  getProduct_colorByProductId,
  getProduct_colors,
  addProduct_color,
  updateProduct_color,
  deleteProduct_color
};