import { handleHTTPError } from '../../utils';
import database from '../../database';
import { Op } from 'sequelize';


/*
Get all products
*/
const getProducts = async (req, res, next) => {
  try {
    const { page, size } = req.pagination;

    // Get products from database
    const products = await database.Product.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: products,
      totalPages: Math.ceil(products.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get all products randomly
*/
const getProductsRandomly = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get products from database
    const products = await database.Product.findAndCountAll({
      limit: size,
      offset: page * size,
      order: database.sequelize.random()
    });
    // Send response
    res.status(200).json({
      content: products,
      totalPages: Math.ceil(products.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/*
Get a specific product
*/
const getProductById = async (req, res, next) => {
  try {
    // Get productId parameter
    const { productId } = req.params;
    // Get specific product
    const product = await database.Product.findAll({
      where: {
        id: productId,
      }
    });
    // Send response
    res.status(200).json(product);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


const getNewCollectionProducts = async (req, res, next) => {
  try {
    const products = await database.Product.findAll({
      where: {
        collection: "new",
      }
    });
    res.status(200).json(products);
  } catch (error) {
    handleHTTPError(error, next);
  }
} 


const getProductByCategoryId = async (req, res, next) => {
  try {
    // Get categoryId parameter
    const { categoryId } = req.params;
    const { brands, colors, min, max } = req.query;
    console.log(brands);
    // Get all products with categoryId

    console.log(categoryId)
    console.log(colors)
    const products = await database.Product.findAll({
      where: {
        price: {
          [Op.between]: [min, max]
        },
        // [Op.and]: [{brand: 'omega'}, {brand}]
      },

      include: [{
        model: database.Category,
        through: {
          where: {
            CategoryId: (categoryId),
          }
        }
      }],
      where: {
        '$Categories.id$': categoryId
      }
    });

    res.status(200).json(products);
  } catch (error) {
    handleHTTPError(error, next);
  }
};




const getProductsByWishlistId = async (req, res, next) => {
  try {
    // Get categoryId parameter
    const { wishlistId } = req.params;
    // Get all products with categoryId

    console.log(wishlistId)

    const products = await database.Product.findAll({
      include: [{
        model: database.Wishlist,
        through: {
          where: {
            WishlistId: (wishlistId)
          }
        }
      }],
      where: {
        '$Wishlists.id$': wishlistId
      }
    });

    res.status(200).json(products);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


const getProductsByPromotion = async (req, res, next) => {
  try {
    // Get all products
    const products = await database.Product.findAll({
      include: [{
        model: database.Promotion,
        where: { active: true }
      }],
    });

    res.status(200).json(products);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/**
 * Creates a new product
 */
const addProduct = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Product.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific product
 */

const updateProduct = async (req, res, next) => {
  try {
    // Get productId parameter
		const { productId } = req.params;
		// Get specific product from database
		const product = await database.Product.findByPk(productId);

		if (product === null) {
			throw new HTTPError(`Could not found the product with id ${productId}!`, 404);
		}

		// Update a specific product
		const model = req.body;
		const updatedProduct = await database.Product.update(model, {
			where: {
				id: productId,
			},
		});

		// Send response
		res.status(200).json(updatedProduct);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete an product
 * 
 */

const deleteProduct = async (req, res, next) => {
  try {
    // Get productId parameter
		const { productId } = req.params;
		// Get specific product from database
		const product = await database.Product.findByPk(productId);

		if (product === null) {
			throw new HTTPError(`Could not found the product with id ${productId}!`, 404);
		}

		// Delete a product with specified id
		const message = await database.Product.destroy({
			where: {
				id: productId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getProductById,
  getProductByCategoryId,
  getNewCollectionProducts,
  getProductsByWishlistId,
  getProductsByPromotion,
  getProducts,
  getProductsRandomly,
  addProduct,
  updateProduct,
  deleteProduct
};