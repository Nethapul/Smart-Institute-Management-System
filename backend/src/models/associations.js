const {
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
} = require("./index");


// ===============================
// Institute Relationships
// ===============================

Institute.hasMany(User, {
  foreignKey: "instituteId",
});

User.belongsTo(Institute, {
  foreignKey: "instituteId",
});


Institute.hasMany(Student, {
  foreignKey: "instituteId",
});

Student.belongsTo(Institute, {
  foreignKey: "instituteId",
});


Institute.hasMany(Teacher, {
  foreignKey: "instituteId",
});

Teacher.belongsTo(Institute, {
  foreignKey: "instituteId",
});


Institute.hasMany(Class, {
  foreignKey: "instituteId",
});

Class.belongsTo(Institute, {
  foreignKey: "instituteId",
});


// ===============================
// Student Relationships
// ===============================

Student.hasMany(Attendance, {
  foreignKey: "studentId",
});

Attendance.belongsTo(Student, {
  foreignKey: "studentId",
});


Student.hasMany(Result, {
  foreignKey: "studentId",
});

Result.belongsTo(Student, {
  foreignKey: "studentId",
});


Student.hasMany(Payment, {
  foreignKey: "studentId",
});

Payment.belongsTo(Student, {
  foreignKey: "studentId",
});


Student.hasMany(Document, {
  foreignKey: "studentId",
});

Document.belongsTo(Student, {
  foreignKey: "studentId",
});


// ===============================
// Parent - Student
// ===============================

Parent.hasMany(Student, {
  foreignKey: "parentId",
});

Student.belongsTo(Parent, {
  foreignKey: "parentId",
});


// ===============================
// Teacher Relationships
// ===============================

Teacher.hasMany(Subject, {
  foreignKey: "teacherId",
});

Subject.belongsTo(Teacher, {
  foreignKey: "teacherId",
});


Teacher.hasMany(Attendance, {
  foreignKey: "teacherId",
});

Attendance.belongsTo(Teacher, {
  foreignKey: "teacherId",
});


// ===============================
// Class Relationships
// ===============================

Class.hasMany(Student, {
  foreignKey: "classId",
});

Student.belongsTo(Class, {
  foreignKey: "classId",
});


Class.hasMany(Subject, {
  foreignKey: "classId",
});

Subject.belongsTo(Class, {
  foreignKey: "classId",
});


Class.hasMany(Timetable, {
  foreignKey: "classId",
});

Timetable.belongsTo(Class, {
  foreignKey: "classId",
});


// ===============================
// User Notifications
// ===============================

User.hasMany(Notification, {
  foreignKey: "userId",
});

Notification.belongsTo(User, {
  foreignKey: "userId",
});


// ===============================
// Student NFC Security
// ===============================

Student.hasOne(NFC, {
  foreignKey: "studentId",
});

NFC.belongsTo(Student, {
  foreignKey: "studentId",
});


// ===============================
// Leave Management
// ===============================

Student.hasMany(Leave, {
  foreignKey: "studentId",
});

Leave.belongsTo(Student, {
  foreignKey: "studentId",
});


Teacher.hasMany(Leave, {
  foreignKey: "teacherId",
});

Leave.belongsTo(Teacher, {
  foreignKey: "teacherId",
});


module.exports = {};