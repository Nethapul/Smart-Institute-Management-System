const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    section: {
      type: DataTypes.STRING,
    },

    academicYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    roomNumber: {
      type: DataTypes.STRING,
    },

    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    classTeacherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "classes",
    timestamps: true,
  }
);

module.exports = Class;