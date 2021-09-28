import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Review extends Model {
		static associate(models) {
			this.belongsTo(models.User);
      this.belongsTo(models.Product);
		}
	}

	Review.init(
		{
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
		},
		{
			sequelize,
			modelName: 'Review',
		},
	);

	return Review;
};
