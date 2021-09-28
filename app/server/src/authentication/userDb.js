import database from '../database';



export default class UserDB {

  /*
  Get a specific user by username
  */
  async getOne(username) {
    try {
      // Get specific user
      const user = await database.User.findOne({
        where: {
          username: username
        }
      });
      // Send response
      return user;
    } catch (error) {
      console.error(error.message);
    }
  };
};
