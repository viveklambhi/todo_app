const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'reason'
      },
      isLowercase: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  source: {
    type: DataTypes.STRING,
    defaultValue: 'self'
  }
},{
  timestamps: true,
  indexes: [{
    unique: true,
    fields: ['email', 'id']
  }]
})

module.exports = User;