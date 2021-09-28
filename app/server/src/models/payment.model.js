import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Payment extends Model {
		static associate(models) {
			this.belongsTo(models.User);
		}
	}

	Payment.init(
		{
			payment_type: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      paid_date: {
        type: DataTypes.DATE,
      }
		},
		{
			sequelize,
			modelName: 'Payment',
		},
	);

	return Payment;
};

