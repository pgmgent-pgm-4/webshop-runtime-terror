import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Order extends Model {
		static associate(models) {
			this.belongsTo(models.User);
      this.belongsToMany(models.Product, {through: 'Order_products', foreignKey: {name: "order_id",
        allowNull:false
      }})
		}
	}

	Order.init(
		{
      order_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      order_state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      delivery_charge: {
        type: DataTypes.FLOAT
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      delivery_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
		},
		{
			sequelize,
			modelName: 'Order',
		},
	);

	return Order;
};
