const { Model, DataTypes } = require('sequelize');

class UserAccount extends Model { }

UserAccount.init({
  userAccountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrementIdentity: true
  },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  birthDate: { type: DataTypes.DATEONLY },
  registrationDate: { type: DataTypes.DATE }
}, {
  underscored: true,
  freezeTableName: true,
  tableName: 'user_account'
});

module.exports = UserAccount;
