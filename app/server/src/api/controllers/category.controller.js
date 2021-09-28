import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all categories
*/
const getCategories = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get categories from database
    const categories = await database.Category.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: categories,
      totalPages: Math.ceil(categories.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific category
*/
const getCategoryById = async (req, res, next) => {
  try {
    // Get categoryId parameter
    const { categoryId } = req.params;
    // Get specific category
    const category = await database.Category.findAll({
      where: {
        id: categoryId
      }
    });
    // Send response
    res.status(200).json(category);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new category
 */
const addCategory = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Category.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific category
 */

const updateCategory = async (req, res, next) => {
  try {
    // Get categoryId parameter
		const { categoryId } = req.params;
		// Get specific category from database
		const category = await database.Category.findByPk(categoryId);

		if (category === null) {
			throw new HTTPError(`Could not found the category with id ${categoryId}!`, 404);
		}

		// Update a specific category
		const model = req.body;
		const updatedCategory = await database.Category.update(model, {
			where: {
				id: categoryId,
			},
		});

		// Send response
		res.status(200).json(updatedCategory);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a category
 * 
 */

const deleteCategory = async (req, res, next) => {
  try {
    // Get categoryId parameter
		const { categoryId } = req.params;
		// Get specific category from database
		const category = await database.Category.findByPk(categoryId);

		if (category === null) {
			throw new HTTPError(`Could not found the category with id ${categoryId}!`, 404);
		}

		// Delete a category with specified id
		const message = await database.Category.destroy({
			where: {
				id: categoryId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getCategoryById,
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory
};