<template>
  <div class="card h-100">
    <div class="card-body p-0">
      <div
        class="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
        <h6 class="text-lg mb-0">Student Attendance</h6>
      </div>
      <div class="p-20">
        <div class="d-flex gap-6">
          <div class="h-44-px bg-primary-600 rounded" style="width: 87%;"></div>
          <div class="h-44-px bg-warning-600 rounded" style="width: 40%;"></div>
          <div class="h-44-px bg-purple-600 rounded" style="width: 20%;"></div>
          <div class="h-44-px bg-success-600 rounded" style="width: 20%;"></div>
        </div>
        <div class="mt-32 d-flex flex-column gap-24">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="w-12-px h-12-px radius-2 bg-primary-600"></span>
              <span class="text-neutral-600">Present </span>
            </div>
            <span class="fw-semibold text-primary-light">87%</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="w-12-px h-12-px radius-2 bg-warning-600"></span>
              <span class="text-neutral-600">Absent: </span>
            </div>
            <span class="fw-semibold text-primary-light">40%</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="w-12-px h-12-px radius-2 bg-purple-600"></span>
              <span class="text-neutral-600">Late </span>
            </div>
            <span class="fw-semibold text-primary-light">20%</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <span class="w-12-px h-12-px radius-2 bg-success-600"></span>
              <span class="text-neutral-600">Half day </span>
            </div>
            <span class="fw-semibold text-primary-light">20%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StuAttendees"
}
</script>
