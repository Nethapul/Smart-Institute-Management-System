<template>
    <div class="card h-100">
        <div class="card-body p-24">
            <div class="d-flex gap-32 flex-md-row flex-column">
                <div class="max-w-300-px w-100 text-center">
                    <figure class="mb-24 w-120-px h-120-px mx-auto rounded-circle overflow-hidden">
                        <img src="@/assets/images/thumbs/teacher-details-img.png" alt="teacher Image"
                            class="w-100 h-100 object-fit-cover">
                    </figure>
                    <h2 class="h6 text-primary-light mb-16 fw-semibold">Marvin McKinney</h2>
                    <p class="mb-0">ID: <span class="text-primary-600 fw-semibold"> AD1256589</span>
                    </p>
                    <p class="mb-0">Subject: <span class="text-primary-light fw-semibold">Mathematics</span>
                    </p>
                    <div class="mt-32 d-flex gap-16 w-100">
                        <button type="button"
                            class="btn border fw-medium border-danger-600 bg-hover-danger-200 text-danger-600 text-md d-flex justify-content-center align-items-center gap-8 flex-grow-1 px-12 py-8 radius-8"
                            data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                            <span class="d-flex text-lg">
                                <i class="ri-delete-bin-2-line"></i>
                            </span>
                            Suspend
                        </button>
                        <router-link to="/edit-teacher"
                            class="btn btn-primary-600 border fw-medium border-primary-600 text-md d-flex justify-content-center align-items-center gap-8 flex-grow-1 px-12 py-8 radius-8">
                            <span class="d-flex text-lg">
                                <i class="ri-edit-line"></i>
                            </span>
                            Edit
                        </router-link>
                    </div>
                </div>
                <div class="">
                    <span class="h-100 w-1-px bg-neutral-200"></span>
                </div>
                <div class="flex-grow-1">
                    <div class="pb-16 border-bottom d-flex align-items-center justify-content-between gap-20">
                        <h3 class="h6 text-primary-light text-lg mb-0 fw-semibold">Personal Info</h3>
                        <span
                            class="bg-success-100 text-success-600 px-16 py-4 radius-4 fw-medium text-sm">Active</span>
                    </div>
                    <div class="mt-16 d-flex flex-column gap-8">
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Class</span>
                            <span class="fw-normal text-sm text-secondary-light">: Class 6 (2025-26)</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Contract Type</span>
                            <span class="fw-normal text-sm text-secondary-light">: Permanent</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Shift</span>
                            <span class="fw-normal text-sm text-secondary-light">: Morning</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Work Location</span>
                            <span class="fw-normal text-sm text-secondary-light">: 2nd Floor</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Date Of Birth</span>
                            <span class="fw-normal text-sm text-secondary-light">: 10 Nov 2006</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Gender</span>
                            <span class="fw-normal text-sm text-secondary-light">: Male</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Join Date</span>
                            <span class="fw-normal text-sm text-secondary-light">: 05 May 2012</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Phone Number</span>
                            <span class="fw-normal text-sm text-primary-600">: 789678456</span>
                        </div>
                        <div class="d-flex gap-4">
                            <span class="fw-semibold text-sm text-primary-light w-110-px">Email</span>
                            <span class="fw-normal text-sm text-primary-600">: set@example.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeacherHeader"
}
</script>
