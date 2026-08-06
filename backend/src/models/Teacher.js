const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    employeeId: {
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

    email: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
    },

    qualification: {
      type: DataTypes.STRING,
    },

    profileImage: {
      type: DataTypes.STRING,
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
    tableName: "teachers",
    timestamps: true,
  }
);

module.exports = Teacher;