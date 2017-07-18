module.exports = (sequelize, DataTypes) => (sequelize.define('URL', {
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
}));
