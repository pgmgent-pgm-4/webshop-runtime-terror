import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Promotion extends Model {
		static associate(models) {
			this.belongsTo(models.Product);
		}
	}

	Promotion.init(
		{
			name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      discount_percent: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
		},
		{
			sequelize,
			modelName: 'Promotion',
		},
	);

	return Promotion;
};

