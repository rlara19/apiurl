module.exports = function (sequelize, DataTypes) {
  const URL = sequelize.define('URL', {
    URL_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    longURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return URL;
};
