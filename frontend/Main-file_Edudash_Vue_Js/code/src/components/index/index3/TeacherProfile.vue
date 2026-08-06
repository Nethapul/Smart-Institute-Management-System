<template>
  <div class="card radius-12 border-0 h-100">
    <div class="card-body p-24">
      <div class="row g-3">
        <div class="col-md-5">
          <div
            class="radius-8 overflow-hidden position-relative z-1 h-100 py-32 px-20 text-center d-flex justify-content-center align-items-center">
            <img src="/assets/images/bg/edit-profile-bg.png" alt="BG Image"
              class="position-absolute start-0 top-0 w-100 h-100 object-fit-cover z-n1">
            <div class="">
              <span class="mb-12">
                <img src="/assets/images/thumbs/edit-profile-img.png" alt="BG Image"
                  class="rounded-circle object-fit-cover">
              </span>
              <h6 class="text-white">Courtney Henry</h6>
              <span class="text-white text-lg d-block">Class: 1-A, V-B</span>
              <span class="text-white text-lg d-block">Physics</span>
              <div class="mt-12">
                <a href="edit-teacher.html"
                  class="px-20 py-8 text-white bg-white bg-opacity-10 radius-6 fw-medium text-lg">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="row g-3">
            <div class="col-sm-6 col-xs-6">
              <div class="radius-8 py-24 px-16 text-center bg-purple-100">
                <span
                  class="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-purple-300 bg-purple-200">
                  <img src="/assets/images/icons/teacher-widget-icon1.png" alt="User Icon">
                </span>
                <span class="text-secondary-light fw-medium d-block mt-12">Total Students</span>
                <h5 class="text-primary-light">3,500</h5>
              </div>
            </div>
            <div class="col-sm-6 col-xs-6">
              <div class="radius-8 py-24 px-16 text-center bg-success-100">
                <span
                  class="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-success-300 bg-success-200">
                  <img src="/assets/images/icons/teacher-widget-icon2.png" alt="User Icon">
                </span>
                <span class="text-secondary-light fw-medium d-block mt-12">Total Students</span>
                <h5 class="text-primary-light">3,500</h5>
              </div>
            </div>
            <div class="col-sm-6 col-xs-6">
              <div class="radius-8 py-24 px-16 text-center bg-primary-100">
                <span
                  class="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-primary-300 bg-primary-200">
                  <img src="/assets/images/icons/teacher-widget-icon3.png" alt="User Icon">
                </span>
                <span class="text-secondary-light fw-medium d-block mt-12">Total Students</span>
                <h5 class="text-primary-light">3,500</h5>
              </div>
            </div>
            <div class="col-sm-6 col-xs-6">
              <div class="radius-8 py-24 px-16 text-center bg-danger-100">
                <span
                  class="w-48-px h-48-px d-inline-flex justify-content-center align-items-center rounded-circle border border-danger-300 bg-danger-200">
                  <img src="/assets/images/icons/teacher-widget-icon4.png" alt="User Icon">
                </span>
                <span class="text-secondary-light fw-medium d-block mt-12">Total Students</span>
                <h5 class="text-primary-light">3,500</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherProfile"
}
</script>
