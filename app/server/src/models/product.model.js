import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Product extends Model {
		static associate(models) {
			this.hasOne(models.Order_products);
      this.belongsToMany(models.Category, {through: "Product_has_categories"});
      this.hasOne(models.Promotion, {
        foreignKey: {
          allowNull: false
        }
      });
      this.belongsToMany(models.Wishlist, {through: "Wishlist_has_products"});
      // this.hasMany(models.Product_media, {
      //   foreignKey: {
      //     allowNull: false
      //   }
      // });
      this.hasMany(models.Product_superlative, {
        foreignKey: {
          allowNull: false
        }
      });
      this.hasMany(models.Review, {
        foreignKey: {
          allowNull: false
        }
      });
		}
	}

	Product.init(
		{
			title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      watch_display_length: {
        type: DataTypes.FLOAT
      },
      watch_thickness: {
        type: DataTypes.FLOAT
      },
      watch_length: {
        type: DataTypes.FLOAT
      },
      watch_width: {
        type: DataTypes.FLOAT
      },
      case_material: {
        type: DataTypes.STRING
      },
      case_color: {
        type: DataTypes.STRING
      },
      case_width: {
        type: DataTypes.FLOAT
      },
      case_length: {
        type: DataTypes.FLOAT
      },
      case_thickness: {
        type: DataTypes.FLOAT
      },
      case_shape: {
        type: DataTypes.STRING
      },
      glass_material: {
        type: DataTypes.STRING
      },
      glass_opening_diameter: {
        type: DataTypes.FLOAT
      },
      band_material: {
        type: DataTypes.STRING
      },
      band_color: {
        type: DataTypes.STRING
      },
      band_width: {
        type: DataTypes.FLOAT
      },
      band_length: {
        type: DataTypes.FLOAT
      },
      circumference_range: {
        type: DataTypes.FLOAT
      },
      movement_type: {
        type: DataTypes.STRING
      },
      battery: {
        type: DataTypes.STRING
      },
      battery_life: {
        type: DataTypes.FLOAT
      },
      weight: {
        type: DataTypes.FLOAT
      },
      water_resistance: {
        type: DataTypes.FLOAT
      },
      storage_material: {
        type: DataTypes.STRING
      },
      storage_color: {
        type: DataTypes.STRING
      },
      storage_width: {
        type: DataTypes.FLOAT
      },
      storage_length: {
        type: DataTypes.FLOAT
      },
      storage_thickness: {
        type: DataTypes.FLOAT
      },
      capacity: {
        type: DataTypes.FLOAT
      },
      storage_style: {
        type: DataTypes.STRING
      },
      collection: {
        type: DataTypes.STRING
      }
		},
		{
			sequelize,
			modelName: 'Product',
		},
	);

	return Product;
};
