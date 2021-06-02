import { handleHTTPError } from '../../utils';
import database from '../../database';
import {validationResult} from 'express-validator';
import bcrypt, { hash } from 'bcrypt';
import dotenv from 'dotenv';

/*
Get all users
*/
const getUsers = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get users from database
    const users = await database.User.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: users,
      totalPages: Math.ceil(users.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific user by id
*/
const getUserById = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific user
    const user = await database.User.findAll({
      where: {
        id: userId
      }
    });
    // Send response
    res.status(200).json(user);
  } catch (error) {
    handleHTTPError(error, next);
  }
};


/**
 * Creates a new user
 */
const addUser = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
    await bcrypt.hash(model.password, parseInt(process.env.BCRYPT_SALT_ROUNDS)).then((hash) => {
      model.password = hash;
    });
    // Create a post
    const createdModel = await database.User.create(model);
    console.log(model);
    // Send response
    res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

// const { user } = req.body;
  // bcrypt.hash(req.body.password, parseInt(process.env.BCRYPT_SALT_ROUNDS)).then((hash) => {
  //   user.password = hash;
  //   console.log(user)
  // })
  



/**
 * Update a specific user
 */

const updateUser = async (req, res, next) => {
  try {
    // Get userId parameter
		const { userId } = req.params;
		console.log(userId);
		// Get specific user from database
		const user = await database.User.findByPk(userId);

		if (user === null) {
			throw new HTTPError(`Could not found the user with id ${userId}!`, 404);
		}

		// Update a specific user
		const model = req.body;
		const updatedUser = await database.User.update(model, {
			where: {
				id: userId,
			},
		});

		// Send response
		res.status(200).json(updatedUser);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a user
 * 
 */

const deleteUser = async (req, res, next) => {
  try {
    // Get userId parameter
		const { userId } = req.params;
		// Get specific user from database
		const user = await database.User.findByPk(userId);

		if (user === null) {
			throw new HTTPError(`Could not found the user with id ${userId}!`, 404);
		}

		// Delete a user with specified id
		const message = await database.User.destroy({
			where: {
				id: userId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getUserById,
  getUsers,
  addUser,
  updateUser,
  deleteUser
};