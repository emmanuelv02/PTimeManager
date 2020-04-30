const { Model, DataTypes, Deferrable } = require('sequelize');
const UserAccount = require('./UserAccount');
const Tag = require('./Tag');

const Sequelize = require('..');

class Activity extends Model { }

Activity.init({
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  userAccountId: {
    type: DataTypes.INTEGER,

    references: {
      model: UserAccount,
      key: 'userAccountId',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  tableName: 'activity',
  freezeTableName: true,
  underscored: true,
  sequelize: Sequelize,
  timestamps: false
});

Activity.belongsToMany(Tag, {
  through: 'activity_tag',
  foreignKey: 'activity_id',
  otherKey: 'tag_id',
  timestamps: false
});

module.exports = Activity;
