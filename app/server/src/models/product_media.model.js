import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Product_media extends Model {
		static associate(models) {
			this.belongsTo(models.Product);
		}
	}

  Product_media.init(
		{
			// product_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      img: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
		},
		{
			sequelize,
			modelName: 'Product_media',
		},
	);

	return Product_media;
};
