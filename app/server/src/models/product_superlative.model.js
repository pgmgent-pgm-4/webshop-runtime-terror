import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Product_superlative extends Model {
		static associate(models) {
			this.belongsTo(models.Product);
		}
	}

  Product_superlative.init(
		{
			superlative: {
        type: DataTypes.STRING(255)
      },
      img: {
        type: DataTypes.STRING
      }
		},
		{
			sequelize,
			modelName: 'Product_superlative',
		},
	);

	return Product_superlative;
};
