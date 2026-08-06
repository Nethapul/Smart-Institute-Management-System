const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Institute = sequelize.define(
  "Institute",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    registrationNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.TEXT,
    },

    logo: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "institutes",
    timestamps: true,
  }
);

module.exports = Institute;