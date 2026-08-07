const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Timetable = sequelize.define(
"Timetable",
{

id:{
type:DataTypes.INTEGER,
autoIncrement:true,
primaryKey:true
},


classId:{
type:DataTypes.INTEGER,
allowNull:false
},


subjectId:{
type:DataTypes.INTEGER,
allowNull:false
},


teacherId:{
type:DataTypes.INTEGER,
allowNull:false
},


day:{
type:DataTypes.STRING,
allowNull:false
},


startTime:{
type:DataTypes.TIME,
allowNull:false
},


endTime:{
type:DataTypes.TIME,
allowNull:false
},


room:{
type:DataTypes.STRING
},


instituteId:{
type:DataTypes.INTEGER,
allowNull:false
}


},
{
tableName:"timetables",
timestamps:true
}

);


module.exports = Timetable;