const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");


const Leave=sequelize.define(
"Leave",
{

id:{
type:DataTypes.INTEGER,
autoIncrement:true,
primaryKey:true
},


studentId:{
type:DataTypes.INTEGER
},


teacherId:{
type:DataTypes.INTEGER
},


reason:{
type:DataTypes.TEXT,
allowNull:false
},


startDate:{
type:DataTypes.DATEONLY,
allowNull:false
},


endDate:{
type:DataTypes.DATEONLY,
allowNull:false
},


status:{
type:DataTypes.ENUM(
"Pending",
"Approved",
"Rejected"
),
defaultValue:"Pending"
},


instituteId:{
type:DataTypes.INTEGER,
allowNull:false
}


},
{
tableName:"leaves",
timestamps:true
}

);


module.exports=Leave;