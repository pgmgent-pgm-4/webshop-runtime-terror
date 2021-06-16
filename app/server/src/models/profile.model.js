import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Profile extends Model {
		static associate(models) {
			this.belongsTo(models.User);
		}
	}

	Profile.init(
		{
			first_name: {
        type: DataTypes.STRING(255)
      },
      last_name: {
        type: DataTypes.STRING
      },
      admin: {
        type: DataTypes.BOOLEAN
      },
      street: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER
      },
      zip_code: {
        type: DataTypes.INTEGER
      },
      city: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      img: {
        type: DataTypes.STRING
      },
      birthday: {
        type: DataTypes.STRING
      }
		},
		{
			sequelize,
			modelName: 'Profile',
		},
	);

	return Profile;
};
