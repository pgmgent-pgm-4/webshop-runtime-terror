import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all product_medias
*/
const getProduct_medias = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get product_medias from database
    const product_medias = await database.Product_media.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: product_medias,
      totalPages: Math.ceil(product_medias.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific product_media
*/
const getProduct_mediaById = async (req, res, next) => {
  try {
    // Get product_mediaId parameter
    const { product_mediaId } = req.params;
    // Get specific product_media
    const product_media = await database.Product_media.findAll({
      where: {
        id: product_mediaId
      }
    });
    // Send response
    res.status(200).json(product_media);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new product_media
 */
const addProduct_media = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Product_media.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific product_media
 */

const updateProduct_media = async (req, res, next) => {
  try {
    // Get product_mediaId parameter
		const { product_mediaId } = req.params;
		// Get specific product_media from database
		const product_media = await database.Product_media.findByPk(product_mediaId);

		if (product_media === null) {
			throw new HTTPError(`Could not found the product_media with id ${product_mediaId}!`, 404);
		}

		// Update a specific product_media
		const model = req.body;
		const updatedProduct_media = await database.Product_media.update(model, {
			where: {
				id: product_mediaId,
			},
		});

		// Send response
		res.status(200).json(updatedProduct_media);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a product_media
 * 
 */

const deleteProduct_media = async (req, res, next) => {
  try {
    // Get product_mediaId parameter
		const { product_mediaId } = req.params;
		// Get specific product_media from database
		const product_media = await database.Product_media.findByPk(product_mediaId);

		if (product_media === null) {
			throw new HTTPError(`Could not found the product_media with id ${product_mediaId}!`, 404);
		}

		// Delete a product_media with specified id
		const message = await database.Product_media.destroy({
			where: {
				id: product_mediaId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getProduct_mediaById,
  getProduct_medias,
  addProduct_media,
  updateProduct_media,
  deleteProduct_media
};