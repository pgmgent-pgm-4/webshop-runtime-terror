import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Product_color extends Model {
		static associate(models) {
			this.belongsTo(models.Product);
		}
	}

  Product_color.init(
		{
			color: {
        type: DataTypes.STRING(255),
        allowNull: false
      } 
		},
		{
			sequelize,
			modelName: 'Product_color',
		},
	);

	return Product_color;
};
