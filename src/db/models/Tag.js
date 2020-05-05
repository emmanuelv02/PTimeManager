const { Model, DataTypes } = require('sequelize');
const Sequelize = require('..');

class Tag extends Model { }

Tag.init({
  tagId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  name: { type: DataTypes.STRING, allowNull: false }
}, {
  underscored: true,
  freezeTableName: true,
  tableName: 'tag',
  timestamps: false,
  sequelize: Sequelize
});

module.exports = Tag;
