"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here: định nghĩa mối quan hệ
      // Một sản phẩm thuộc về một danh mục nào đó, với khóa ngoại là categoryId
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      // Một sản phẩm thuộc về một brand nào đó, với khóa ngoại là brandId
      Product.belongsTo(models.Brand, { foreignKey: "brandId" });
      // Một sản phẩm sẽ có nhiều màu
      Product.hasMany(models.ProductColor, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      imagepath: DataTypes.TEXT,
      thumbnailPath: DataTypes.TEXT,
      availability: DataTypes.BOOLEAN,
      summary: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
