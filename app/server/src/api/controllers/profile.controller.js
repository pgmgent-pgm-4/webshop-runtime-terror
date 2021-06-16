import { handleHTTPError } from '../../utils';
import database from '../../database';


/*
Get all profiles
*/
const getProfiles = async (req, res, next) => {
  try {
    const { page, size } = req.pagination
    // Get profiles from database
    const profiles = await database.Profile.findAndCountAll({
      limit: size,
      offset: page * size
    });
    // Send response
    res.status(200).json({
      content: profiles,
      totalPages: Math.ceil(profiles.count / Number.parseInt(size))
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific profile
*/
const getProfileById = async (req, res, next) => {
  try {
    // Get profileId parameter
    const { profileId } = req.params;
    // Get specific profile
    const profile = await database.Profile.findAll({
      where: {
        id: profileId
      }
    });
    // Send response
    res.status(200).json(profile);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific profile by userId
*/
const getProfileByUserId = async (req, res, next) => {
  try {
    // Get userId parameter
    const { userId } = req.params;
    // Get specific profile
    const profile = await database.Profile.findAll({
      where: {
        UserId: userId
      }
    });
    // Send response
    res.status(200).json(profile);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Creates a new profile
 */
const addProfile = async (req, res, next) => {
  try {
    // Get body from response
		const model = req.body;
		// Create a post
		const createdModel = await database.Profile.create(model);
		// Send response
		res.status(201).json(createdModel);
  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Update a specific profile
 */

const updateProfile = async (req, res, next) => {
  try {
    // Get profileId parameter
		const { profileId } = req.params;
		// Get specific profile from database
		const profile = await database.Profile.findByPk(profileId);

		if (profile === null) {
			throw new HTTPError(`Could not found the profile with id ${profileId}!`, 404);
		}

		// Update a specific profile
		const model = req.body;
		const updatedProfile = await database.Profile.update(model, {
			where: {
				id: profileId,
			},
		});

		// Send response
		res.status(200).json(updatedProfile);

  } catch (error) {
    handleHTTPError(error, next)
  }
}

/**
 * Delete a profile
 * 
 */

const deleteProfile = async (req, res, next) => {
  try {
    // Get profileId parameter
		const { profileId } = req.params;
		// Get specific profile from database
		const profile = await database.Profile.findByPk(profileId);

		if (profile === null) {
			throw new HTTPError(`Could not found the profile with id ${profileId}!`, 404);
		}

		// Delete a profile with specified id
		const message = await database.Profile.destroy({
			where: {
				id: profileId,
			},
		});

		// Send response
		res.status(200).json(message);
  } catch (error) {
    handleHTTPError(error, next)
  }
}


export {
  getProfileById,
  getProfileByUserId,
  getProfiles,
  addProfile,
  updateProfile,
  deleteProfile
};