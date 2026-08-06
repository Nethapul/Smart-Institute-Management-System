<template>
  <Sidebar />
  <main class="dashboard-main">
    <Navabar />
    
    <div class="dashboard-main-body">
      <div class="breadcrumb d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <div class="">
          <h6 class="fw-semibold mb-0">Dashboard</h6>
          <p class="text-neutral-600 mt-4 mb-0">School -> Manage your school, track attendance, expense, and net worth.</p>
        </div>
      </div>

      <div class="mt-24">
        <div class="row gy-4">
          <div class="col-xxl-8">
            <div class="row gy-4">
              <div class="col-xxl-4 col-sm-6" v-for="(widget, index) in widgets" :key="index">
                <Widget 
                  :title="widget.title" 
                  :count="widget.count" 
                  :icon="widget.icon" 
                  :gradientBg="widget.gradientBg"
                  :iconColor="widget.iconColor"
                />
              </div>
            </div>
          </div>
          <div class="col-xxl-4">
             <StuAttendees />
          </div>

          <div class="col-12">
            <div class="row gy-4">
               <div class="col-xxl-8">
                  <div class="row gy-4">
                     <div class="col-12">
                        <RevenueStatic />
                     </div>
                     <div class="col-md-6">
                        <NoticeBoard />
                     </div>
                     <div class="col-md-6">
                        <LeaveRequests />
                     </div>
                  </div>
               </div>
               <div class="col-xxl-4">
                  <Calendar />
               </div>
            </div>
          </div>

          <div class="col-xxl-4 col-lg-6">
             <UserOverview />
          </div>
          <div class="col-xxl-8 col-lg-6">
             <IncomeVsExpense />
          </div>

          <div class="col-xxl-4 col-lg-6">
             <TopTeachers />
          </div>
          <div class="col-xxl-4 col-lg-6">
             <NewAdmissions />
          </div>
          <div class="col-xxl-4">
             <TopStudent />
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
import Widget from '@/components/index/index1/Widget.vue';
import StuAttendees from '@/components/index/index1/StuAttendees.vue';
import RevenueStatic from '@/components/index/index1/RevenueStatic.vue';
import NoticeBoard from '@/components/index/index1/NoticeBoard.vue';
import LeaveRequests from '@/components/index/index1/LeaveRequests.vue';
import Calendar from '@/components/index/index1/Calendar.vue';
import UserOverview from '@/components/index/index1/UserOverview.vue';
import IncomeVsExpense from '@/components/index/index1/IncomeVsExpense.vue';
import TopTeachers from '@/components/index/index1/TopTeachers.vue';
import NewAdmissions from '@/components/index/index1/NewAdmissions.vue';
import TopStudent from '@/components/index/index1/TopStudent.vue';

export default {
  name: "Index1",
  components: {
    Sidebar,
    Navabar,
    Footer,
    ThemeCustomizer,
    Widget,
    StuAttendees,
    RevenueStatic,
    NoticeBoard,
    LeaveRequests,
    Calendar,
    UserOverview,
    IncomeVsExpense,
    TopTeachers,
    NewAdmissions,
    TopStudent
  },
  data() {
    return {
      widgets: [
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon1.png', gradientBg: 'gradient-bg-end-1', iconColor: 'bg-warning-600' },
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon2.png', gradientBg: 'gradient-bg-end-2', iconColor: 'bg-blue-600' },
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon3.png', gradientBg: 'gradient-bg-end-3', iconColor: 'bg-purple-600' },
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon4.png', gradientBg: 'gradient-bg-end-4', iconColor: 'bg-primary-600' },
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon5.png', gradientBg: 'gradient-bg-end-5', iconColor: 'bg-success-600' },
        { title: 'Total Student', count: '20,000', icon: '/assets/images/icons/dashboard-icon6.png', gradientBg: 'gradient-bg-end-6', iconColor: 'bg-cyan-600' }
      ]
    }
  }
}
</script>