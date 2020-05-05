const { Model, DataTypes, Deferrable } = require('sequelize');
const Activity = require('./Activity');
const Sequelize = require('..');

class ActivityExecution extends Model { }

ActivityExecution.init({
  activityExecutionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE },
  manuallyCreated: { type: DataTypes.DATE },
  registrationDate: { type: DataTypes.DATE },
  activityId: {
    type: DataTypes.INTEGER,

    references: {
      model: Activity,
      key: 'activityId',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  tableName: 'activity_execution',
  freezeTableName: true,
  underscored: true,
  sequelize: Sequelize,
  timestamps: false
});

module.exports = ActivityExecution;
