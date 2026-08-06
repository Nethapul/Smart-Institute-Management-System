const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Parent = sequelize.define(
  "Parent",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    parentId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
    },

    relationship: {
      type: DataTypes.ENUM(
        "FATHER",
        "MOTHER",
        "GUARDIAN"
      ),
      defaultValue: "GUARDIAN",
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.TEXT,
    },

    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "parents",
    timestamps: true,
  }
);

module.exports = Parent;