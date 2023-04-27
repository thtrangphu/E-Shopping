"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Catelogy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // một danh mục có nhiều sản phẩm
      Category.hasMany(models.Product, { foreignKey: "categoryId" });
    }
  }
  Catelogy.init(
    {
      name: DataTypes.STRING,
      summary: DataTypes.TEXT,
      imagepath: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Catelogy",
    }
  );
  return Catelogy;
};
