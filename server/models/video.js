"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //관계작업
      // models.video.belongsTo(models.post, { foreignKey: "post_id" });
    }
  }
  video.init(
    {
      post_id: DataTypes.INTEGER,
      contents: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "video",
    }
  );
  return video;
};
