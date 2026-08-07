const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Attendance = sequelize.define(
  "Attendance",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "PRESENT",
        "ABSENT",
        "LATE",
        "LEAVE"
      ),
      defaultValue: "PRESENT",
    },

    checkInTime: {
      type: DataTypes.TIME,
    },

    checkOutTime: {
      type: DataTypes.TIME,
    },

    method: {
      type: DataTypes.ENUM(
        "NFC",
        "MANUAL",
        "QR"
      ),
      defaultValue: "MANUAL",
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    markedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "attendances",
    timestamps: true,
  }
);

module.exports = Attendance;
