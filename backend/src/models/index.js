const sequelize = require("../config/database");

const User = require("./User");
const Institute = require("./Institute");
const Student = require("./Student");
const Teacher = require("./Teacher");
const Parent = require("./Parent");
const Class = require("./Class");
const Subject = require("./Subject");
const Attendance = require("./Attendance");
const Exam = require("./Exam");
const Payment = require("./Payment");
const Notification = require("./Notification");
const NFC = require("./NFC");
const Document = require("./Document");
const Timetable = require("./Timetable");
const Result = require("./Result");
const Leave = require("./Leave");


module.exports = {
  sequelize,
  User,
  Institute,
  Student,
  Teacher,
  Parent,
  Class,
  Subject,
  Attendance,
  Exam,
  Payment,
  Notification,
  NFC,
  Document,
  Timetable,
  Result,
  Leave
};