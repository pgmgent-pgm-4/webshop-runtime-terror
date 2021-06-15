import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class User extends Model {
		static associate(models) {
      this.hasOne(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      });
			this.hasMany(models.Payment, {
        foreignKey: {
          allowNull: false
        }
      });
      this.hasMany(models.Order, {
        foreignKey: {
          allowNull: false
        }
      });
      this.hasMany(models.Review, {
        foreignKey: {
          allowNull: false
        }
      });
      this.hasOne(models.Wishlist, {
        foreignKey: {
          allowNull: false
        }
      });

		}
	}

	User.init(
		{
      username: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
		},
		{
			sequelize,
			modelName: 'User',
		},
	);

	return User;
};


