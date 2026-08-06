import { createRouter, createWebHistory } from 'vue-router'

// DashBoard
import Index1 from './pages/index/index1.vue';
import Index2 from './pages/index/index2.vue';
import Index3 from './pages/index/index3.vue';
import Index4 from './pages/index/index4.vue';
import Index5 from './pages/index/index5.vue';

// Students
import AddNewStudent from './pages/students/addNewStudent.vue';
import StudentList from './pages/students/studentList.vue';
import SuspendedStudent from './pages/students/suspendedStudent.vue';
import StudentCategory from './pages/students/studentCategory.vue';
import EditStudent from './pages/students/editStudent.vue';
import StudentDetails from './pages/students/studentDetails.vue';

// Teachers
import AddNewTeacher from './pages/teachers/addNewTeacher.vue';
import TeacherList from './pages/teachers/teacherList.vue';
import EditTeacher from './pages/teachers/editTeacher.vue';
import TeacherDetails from './pages/teachers/teacherDetails.vue';
import TeacherTimetable from './pages/teachers/teacherTimetable.vue';

// Guardians
import AddNewGuardian from './pages/guardians/addNewGuardian.vue';
import GuardianList from './pages/guardians/guardianList.vue';
import EditGuardian from './pages/guardians/editGuardian.vue';
import GuardianDetails from './pages/guardians/guardianDetails.vue';

// Class/Section
import SectionList from './pages/class/sectionList.vue';
import SubjectList from './pages/class/subjectList.vue';
import ClassList from './pages/class/classList.vue';
import ClassRoomList from './pages/class/classRoomList.vue';
import ExamList from './pages/examination/examList.vue';
import ExamScheduleList from './pages/examination/examScheduleList.vue';
import ExamResultList from './pages/examination/examResult.vue';
import FeesCollectionList from './pages/fees/feesCollection.vue';
import FeesTypeList from './pages/fees/feesType.vue';
import FeesGroupList from './pages/fees/feesGroup.vue';
import FeesDiscountList from './pages/fees/feesDiscount.vue';
import StudentAttendance from './pages/attendance/StudentAttendance.vue';
import TeacherAttendance from './pages/attendance/TeacherAttendance.vue';
import EmployeeAttendance from './pages/attendance/EmployeeAttendance.vue';
import LeaveTypes from './pages/leaves/LeaveTypes.vue';
import LeaveRequest from './pages/leaves/LeaveRequest.vue';
import Certificate from './pages/certificate/Certificate.vue';
import BooksList from './pages/library/BooksList.vue';
import MembersList from './pages/library/MembersList.vue';
import MemberDetails from './pages/library/MemberDetails.vue';
import IssueReturn from './pages/library/IssueReturn.vue';
import IncomeHead from './pages/accounts/IncomeHead.vue';
import IncomeList from './pages/accounts/IncomeList.vue';
import ExpenseHead from './pages/accounts/ExpenseHead.vue';
import ExpenseList from './pages/accounts/ExpenseList.vue';
import Transaction from './pages/accounts/Transaction.vue';
import EmployeeList from './pages/hrm/EmployeeList.vue';
import EmployeeDetails from './pages/hrm/EmployeeDetails.vue';
import AddEmployee from './pages/hrm/AddEmployee.vue';
import Payroll from './pages/hrm/Payroll.vue';
import Designation from './pages/hrm/Designation.vue';
import Department from './pages/hrm/Department.vue';
import NoticeBoard from './pages/noticeBoard/NoticeBoard.vue';
import Event from './pages/event/Event.vue';
import Message from './pages/message/Message.vue';
import SubscriptionPlan from './pages/subscriptionPlan/SubscriptionPlan.vue';
import RoleAccess from './pages/roleAccess/RoleAccess.vue';
import AssignRole from './pages/assignRole/AssignRole.vue';
import GeneralSettings from './pages/settings/General.vue';
import NotificationSettings from './pages/settings/Notification.vue';
import CurrenciesSettings from './pages/settings/Currencies.vue';
import LanguagesSettings from './pages/settings/Languages.vue';
import LoginPage from './pages/authentication/Login.vue';
import RegisterPage from './pages/authentication/Register.vue';

// Routes
const routes = [

    // DashBoard
    { path: '/', component: Index1 },
    { path: '/index-2', component: Index2 },
    { path: '/index-3', component: Index3 },
    { path: '/index-4', component: Index4 },
    { path: '/index-5', component: Index5 },

    // Students
    { path: '/add-new-student', component: AddNewStudent },
    { path: '/student-list', component: StudentList },
    { path: '/suspended-student', component: SuspendedStudent },
    { path: '/student-category', component: StudentCategory },
    { path: '/edit-student', component: EditStudent },
    { path: '/student-details', component: StudentDetails },

    // Teachers
    { path: '/add-new-teacher', component: AddNewTeacher },
    { path: '/teacher-list', component: TeacherList },
    { path: '/edit-teacher', component: EditTeacher },
    { path: '/teacher-details', component: TeacherDetails },
    { path: '/teacher-timetable', component: TeacherTimetable },

    // Guardians
    { path: '/add-new-guardian', component: AddNewGuardian },
    { path: '/guardian-list', component: GuardianList },
    { path: '/edit-guardian', component: EditGuardian },
    { path: '/guardian-details', component: GuardianDetails },

    // Class/Section
    { path: '/section-list', component: SectionList },
    { path: '/subject-list', component: SubjectList },
    { path: '/class-list', component: ClassList },
    { path: '/class-room-list', component: ClassRoomList },
    { path: '/exam', component: ExamList },
    { path: '/exam-schedule', component: ExamScheduleList },
    { path: '/exam-result', component: ExamResultList },
    { path: '/fees-collect', component: FeesCollectionList },
    { path: '/fees-type', component: FeesTypeList },
    { path: '/fees-group', component: FeesGroupList },
    { path: '/fees-discount', component: FeesDiscountList },
    { path: '/student-attendance', component: StudentAttendance },
    { path: '/teacher-attendance', component: TeacherAttendance },
    { path: '/employee-attendance', component: EmployeeAttendance },
    { path: '/leave-types', component: LeaveTypes },
    { path: '/leave-request', component: LeaveRequest },
    { path: '/certificate', component: Certificate },
    { path: '/books-list', component: BooksList },
    { path: '/members-list', component: MembersList },
    { path: '/member-details', component: MemberDetails },
    { path: '/issue-return', component: IssueReturn },
    { path: '/income-head', component: IncomeHead },
    { path: '/income-list', component: IncomeList },
    { path: '/expense-head', component: ExpenseHead },
    { path: '/expense-list', component: ExpenseList },
    { path: '/transaction', component: Transaction },
    { path: '/employee-list', component: EmployeeList },
    { path: '/employee-details', component: EmployeeDetails },
    { path: '/add-new-employee', component: AddEmployee },
    { path: '/payroll', component: Payroll },
    { path: '/designation', component: Designation },
    { path: '/department', component: Department },
    { path: '/notice-board', component: NoticeBoard },
    { path: '/event', component: Event },
    { path: '/message', component: Message },
    { path: '/subscription-plan', component: SubscriptionPlan },
    { path: '/role-access', component: RoleAccess },
    { path: '/assign-role-plan', component: AssignRole },
    { path: '/general', component: GeneralSettings },
    { path: '/notification', component: NotificationSettings },
    { path: '/currencies', component: CurrenciesSettings },
    { path: '/languages', component: LanguagesSettings },

    // Authentication Routes
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router