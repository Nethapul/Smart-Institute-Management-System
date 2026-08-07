const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Payment = sequelize.define(
"Payment",
{

id:{
type:DataTypes.INTEGER,
autoIncrement:true,
primaryKey:true
},

studentId:{
type:DataTypes.INTEGER,
allowNull:false
},

amount:{
type:DataTypes.DECIMAL(10,2),
allowNull:false
},

paymentDate:{
type:DataTypes.DATE,
defaultValue:DataTypes.NOW
},

paymentMethod:{
type:DataTypes.ENUM(
"CASH",
"CARD",
"ONLINE"
),
defaultValue:"CASH"
},

status:{
type:DataTypes.ENUM(
"PAID",
"PENDING",
"FAILED"
),
defaultValue:"PENDING"
}


},
{
tableName:"payments",
timestamps:true
}
);


module.exports = Payment;