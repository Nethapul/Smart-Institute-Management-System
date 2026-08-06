<template>
  <div class="card h-100">
    <div class="card-body p-0">
      <div
        class="d-flex flex-wrap align-items-center justify-content-between px-20 py-16 border-bottom border-neutral-200">
        <h6 class="text-lg mb-0">User Overview</h6>
        <div class="dropdown">
          <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <iconify-icon icon="entypo:dots-three-vertical" class="icon text-secondary-light"></iconify-icon>
          </button>
          <ul class="dropdown-menu p-12 border bg-base shadow">
            <li>
              <button type="button"
                class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                data-bs-toggle="modal" data-bs-target="#exampleModalView">
                <iconify-icon icon="hugeicons:view" class="icon text-lg line-height-1"></iconify-icon>
                View
              </button>
            </li>
            <li>
              <button type="button"
                class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                <iconify-icon icon="lucide:edit" class="icon text-lg line-height-1"></iconify-icon>
                Edit
              </button>
            </li>
            <li>
              <button type="button"
                class="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
                data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                <iconify-icon icon="fluent:delete-24-regular" class="icon text-lg line-height-1"></iconify-icon>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-20">
        <div>
          <div class="mt-40 mb-24 pe-110 position-relative max-w-288-px mx-auto">
            <div
              class="w-170-px h-170-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center">
              <img src="/assets/images/icons/radial-bg1.png" alt="Image"
                class="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover">
              <h5 class="text-white"> 60% </h5>
            </div>
            <div
              class="w-144-px h-144-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center position-absolute top-0 end-0 mt--36">
              <img src="/assets/images/icons/radial-bg2.png" alt="Image"
                class="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover">
              <h5 class="text-white"> 30% </h5>
            </div>
            <div
              class="w-110-px h-110-px rounded-circle z-1 position-relative d-inline-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x ms-48">
              <img src="/assets/images/icons/radial-bg3.png" alt="Image"
                class="position-absolute top-0 start-0 z-n1 w-100 h-100 object-fit-cover">
              <h5 class="text-white"> 10% </h5>
            </div>
          </div>

          <div class="d-flex align-items-center flex-wrap gap-24 justify-content-evenly">
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center gap-2">
                <span class="w-12-px h-12-px rounded-pill bg-success-600"></span>
                <span class="text-secondary-light text-sm fw-normal">Student</span>
              </div>
              <h6 class="text-primary-light fw-semibold mb-0 mt-4 text-lg">750</h6>
            </div>
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center gap-2">
                <span class="w-12-px h-12-px rounded-pill bg-warning-600"></span>
                <span class="text-secondary-light text-sm fw-normal">Teacher</span>
              </div>
              <h6 class="text-primary-light fw-semibold mb-0 mt-4 text-lg">56</h6>
            </div>
            <div class="d-flex flex-column align-items-start">
              <div class="d-flex align-items-center gap-2">
                <span class="w-12-px h-12-px rounded-pill bg-blue-600"></span>
                <span class="text-secondary-light text-sm fw-normal">Staffs </span>
              </div>
              <h6 class="text-primary-light fw-semibold mb-0 mt-4 text-lg">15</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOverview"
}
</script>
