const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Exam = sequelize.define(
  "Exam",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    examName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    examType: {
      type: DataTypes.ENUM(
        "MONTHLY",
        "MID_TERM",
        "FINAL",
        "OTHER"
      ),
      defaultValue: "MONTHLY",
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    totalMarks: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },

    passMarks: {
      type: DataTypes.INTEGER,
      defaultValue: 40,
    },

    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    instituteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "exams",
    timestamps: true,
  }
);

module.exports = Exam;