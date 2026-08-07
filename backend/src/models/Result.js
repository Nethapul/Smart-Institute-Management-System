const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");


const Result=sequelize.define(
"Result",
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


examId:{
type:DataTypes.INTEGER,
allowNull:false
},


subjectId:{
type:DataTypes.INTEGER,
allowNull:false
},


marks:{
type:DataTypes.INTEGER,
allowNull:false
},


grade:{
type:DataTypes.STRING
},


instituteId:{
type:DataTypes.INTEGER,
allowNull:false
}


},
{
tableName:"results",
timestamps:true
}

);


module.exports=Result;