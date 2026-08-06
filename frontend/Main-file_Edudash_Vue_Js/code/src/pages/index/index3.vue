<template>
  <Sidebar />
  <main class="dashboard-main">
    <Navabar />
    
    <div class="dashboard-main-body">
      <Breadcrumb />

      <div class="mt-24">
        <div class="row gy-4">
          <!-- Teacher Profile & Stats -->
          <div class="col-xxl-7">
            <TeacherProfile />
          </div>

          <!-- Attendance Stats -->
          <div class="col-xxl-5">
            <AttendanceStats />
          </div>

          <!-- Notice Board -->
          <div class="col-xxl-4 col-lg-6">
            <NoticeBoard />
          </div>

          <!-- Upcoming Events -->
          <div class="col-xxl-4 col-lg-6">
            <UpcomingEvents />
          </div>

          <!-- Calendar -->
          <div class="col-xxl-4 col-lg-6">
            <Calendar />
          </div>

          <!-- Student Marks -->
          <div class="col-xxl-8">
            <StudentMarks />
          </div>

          <!-- Leave Status -->
          <div class="col-xxl-4">
            <LeaveStatus />
          </div>

        </div>
      </div>
    </div>
    
    <Footer />
  </main>
  
  <ThemeCustomizer />
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import Navabar from '@/components/layout/Navabar.vue';
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';

// Index 3 Components
import Breadcrumb from '@/components/index/index3/Breadcrumb.vue';
import TeacherProfile from '@/components/index/index3/TeacherProfile.vue';
import AttendanceStats from '@/components/index/index3/AttendanceStats.vue';
import NoticeBoard from '@/components/index/index3/NoticeBoard.vue';
import UpcomingEvents from '@/components/index/index3/UpcomingEvents.vue';
import Calendar from '@/components/index/index3/Calendar.vue';
import StudentMarks from '@/components/index/index3/StudentMarks.vue';
import LeaveStatus from '@/components/index/index3/LeaveStatus.vue';

export default {
  name: "Index3",
  components: {
    Sidebar,
    Navabar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    TeacherProfile,
    AttendanceStats,
    NoticeBoard,
    UpcomingEvents,
    Calendar,
    StudentMarks,
    LeaveStatus
  }
}
</script>
