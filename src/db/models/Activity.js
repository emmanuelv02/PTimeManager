const { Model, DataTypes, Deferrable } = require('sequelize');
const UserAccount = require('./UserAccount');

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
  underscored: true
});

module.exports = Activity;
