const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Subject = sequelize.define(
  "Subject",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subjectCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "subjects",
    timestamps: true,
  }
);

module.exports = Subject;