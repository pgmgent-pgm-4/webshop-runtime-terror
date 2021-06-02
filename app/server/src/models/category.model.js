import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Category extends Model {
		static associate(models) {
			this.belongsToMany(models.Product, { through: 'Product_has_categories' });
		}
	}

	Category.init(
		{
			name: {
        type: DataTypes.STRING,
        allowNull: false
      } 
		},
		{
			sequelize,
			modelName: 'Category',
		},
	);

	return Category;
};