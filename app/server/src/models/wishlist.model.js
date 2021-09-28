import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Wishlist extends Model {
		static associate(models) {
			this.belongsTo(models.User);
      this.belongsToMany(models.Product, {through: "Wishlist_has_products"});
		}
	}

	Wishlist.init(
		{

		},
		{
			sequelize,
			modelName: 'Wishlist',
		},
	);

	return Wishlist;
};