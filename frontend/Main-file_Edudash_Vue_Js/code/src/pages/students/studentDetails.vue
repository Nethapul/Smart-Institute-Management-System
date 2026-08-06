<template>
  <Sidebar />
  <main class="dashboard-main">
    <Navbar />
    <div class="dashboard-main-body">
      <Breadcrumb />

      <div class="mt-24">
        <StudentProfileCard />
      </div>

      <div class="my-16">
        <ul class="nav nav-pills bordered-tab mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 active" id="pills-studentDetails-tab" data-bs-toggle="pill" data-bs-target="#pills-studentDetails" type="button" role="tab" aria-controls="pills-studentDetails" aria-selected="true">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-group-line"></i>
              </span>
              Student Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 " id="pills-attendance-tab" data-bs-toggle="pill" data-bs-target="#pills-attendance" type="button" role="tab" aria-controls="pills-attendance" aria-selected="false">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-calendar-check-line"></i>
              </span>
              Attendance
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 " id="pills-leave-tab" data-bs-toggle="pill" data-bs-target="#pills-leave" type="button" role="tab" aria-controls="pills-leave" aria-selected="false">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-login-box-line"></i>
              </span>
              Leave
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 " id="pills-fees-tab" data-bs-toggle="pill" data-bs-target="#pills-fees" type="button" role="tab" aria-controls="pills-fees" aria-selected="false">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-money-dollar-box-line"></i>
              </span>
              Fees
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 " id="pills-exam-tab" data-bs-toggle="pill" data-bs-target="#pills-exam" type="button" role="tab" aria-controls="pills-exam" aria-selected="false">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-file-edit-line"></i>
              </span>
              exam
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link d-flex align-items-center gap-8 text-secondary-light fw-medium text-sm text-hover-primary-600 text-capitalize bg-transparent px-20 py-12 " id="pills-library-tab" data-bs-toggle="pill" data-bs-target="#pills-library" type="button" role="tab" aria-controls="pills-library" aria-selected="false">
              <span class="d-flex tab-icon line-height-1 text-md">
                <i class="ri-book-line"></i>
              </span>
              library
            </button>
          </li>
        </ul>


        <div class="tab-content" id="pills-tabContent">
          <!-- Student Details tab start -->
          <div class="tab-pane fade show active" id="pills-studentDetails" role="tabpanel" aria-labelledby="pills-studentDetails-tab" tabindex="0">
            <StudentDetailsTab />
          </div>
          <!-- Student Details tab end -->

          <!-- Attendance tab start -->
          <div class="tab-pane fade" id="pills-attendance" role="tabpanel" aria-labelledby="pills-attendance-tab" tabindex="0">
            <StudentAttendanceTab />
          </div>
           <!-- Attendance tab end -->

           <!-- Other Tabs (Placeholders) -->
           <div class="tab-pane fade" id="pills-leave" role="tabpanel" aria-labelledby="pills-leave-tab" tabindex="0">
              <div class="card h-100 p-24 text-center">
                  <h6>Leave Details Content Coming Soon</h6>
              </div>
           </div>
           <div class="tab-pane fade" id="pills-fees" role="tabpanel" aria-labelledby="pills-fees-tab" tabindex="0">
              <div class="card h-100 p-24 text-center">
                  <h6>Fees Details Content Coming Soon</h6>
              </div>
           </div>
           
           <div class="tab-pane fade" id="pills-exam" role="tabpanel" aria-labelledby="pills-exam-tab" tabindex="0">
               <div class="card h-100 p-24 text-center">
                  <h6>Exam Details Content Coming Soon</h6>
              </div>
           </div>
           <div class="tab-pane fade" id="pills-library" role="tabpanel" aria-labelledby="pills-library-tab" tabindex="0">
               <div class="card h-100 p-24 text-center">
                  <h6>Library Details Content Coming Soon</h6>
              </div>
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
import Navbar from '@/components/layout/Navabar.vue';
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';
import Breadcrumb from '@/components/students/studentDetails/Breadcrumb.vue';
import StudentProfileCard from '@/components/students/studentDetails/StudentProfileCard.vue';
import StudentDetailsTab from '@/components/students/studentDetails/StudentDetailsTab.vue';
import StudentAttendanceTab from '@/components/students/studentDetails/StudentAttendanceTab.vue';

export default {
  name: "StudentDetails",
  components: {
    Sidebar,
    Navbar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    StudentProfileCard,
    StudentDetailsTab,
    StudentAttendanceTab
  }
}
</script>
