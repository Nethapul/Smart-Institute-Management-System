const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NFC = sequelize.define(
  "NFC",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cardUID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    issuedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    expiryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "ACTIVE",
        "BLOCKED",
        "LOST",
        "EXPIRED"
      ),
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "nfc_cards",
    timestamps: true,
  }
);

module.exports = NFC;