const { Model, DataTypes, Deferrable } = require('sequelize');
const Activity = require('./Activity');
const Sequelize = require('..');

class Goal extends Model { }

Goal.init({
  goalId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  description: { type: DataTypes.STRING },
  timeGoal: { type: DataTypes.DATE, allowNull: false },
  periodicity: { type: DataTypes.JSON, allowNull: false },
  activityId: {
    type: DataTypes.INTEGER,

    references: {
      model: Activity,
      key: 'activityId',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  mainGoalId: {
    type: DataTypes.INTEGER,

    references: {
      model: Goal,
      key: 'goalId',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  tableName: 'goal',
  freezeTableName: true,
  underscored: true,
  sequelize: Sequelize,
  timestamps: false
});

module.exports = Goal;
