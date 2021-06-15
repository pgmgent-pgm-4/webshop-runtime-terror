import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Order_products extends Model {
		static associate(models) {
			this.belongsTo(models.Order);
      this.belongsTo(models.Product) 
		}
	}

	Order_products.init(
		{
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
		},
		{
			sequelize,
			modelName: 'Order_products',
		},
	);

	return Order_products;
};