<template>
  <Sidebar />
  <main class="dashboard-main">
    <Navabar />
    
    <div class="dashboard-main-body">
      <Breadcrumb />

      <div class="mt-24">
        <div class="row gy-4">
          <!-- Student Profile & Stats -->
          <div class="col-xxl-4">
            <StudentProfile />
          </div>

          <!-- Attendance Chart -->
          <div class="col-xxl-4 col-lg-6">
            <AttendanceChart />
          </div>

          <!-- Today's Class -->
          <div class="col-xxl-4 col-lg-6">
            <TodaysClass />
          </div>

          <!-- Exam Results -->
          <div class="col-xxl-8">
            <ExamResults />
          </div>

          <!-- Calendar -->
          <div class="col-xxl-4 col-lg-6">
            <Calendar />
          </div>

          <!-- Leave Status -->
          <div class="col-xxl-4 col-lg-6">
            <LeaveStatus />
          </div>

          <!-- Notice Board -->
          <div class="col-xxl-4 col-lg-6">
            <NoticeBoard />
          </div>

          <!-- Upcoming Events -->
          <div class="col-xxl-4 col-lg-6">
            <UpcomingEvents />
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

// Index 2 Components
import Breadcrumb from '@/components/index/index2/Breadcrumb.vue';
import StudentProfile from '@/components/index/index2/StudentProfile.vue';
import AttendanceChart from '@/components/index/index2/AttendanceChart.vue';
import TodaysClass from '@/components/index/index2/TodaysClass.vue';
import ExamResults from '@/components/index/index2/ExamResults.vue';
import Calendar from '@/components/index/index2/Calendar.vue';
import LeaveStatus from '@/components/index/index2/LeaveStatus.vue';
import NoticeBoard from '@/components/index/index2/NoticeBoard.vue';
import UpcomingEvents from '@/components/index/index2/UpcomingEvents.vue';

export default {
  name: "Index2",
  components: {
    Sidebar,
    Navabar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    StudentProfile,
    AttendanceChart,
    TodaysClass,
    ExamResults,
    Calendar,
    LeaveStatus,
    NoticeBoard,
    UpcomingEvents
  }
}
</script>
