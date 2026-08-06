<template>
    <div class="card h-100">
        <div class="card-body p-0 dataTable-wrapper">

            <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-16 px-20 py-12 border-bottom border-neutral-200">
                <div class="d-flex flex-wrap align-items-center gap-16">
                    <div class="dropdown">
                        <button type="button"
                            class="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20 "
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="d-flex align-items-center gap-1 text-secondary-light text-sm">
                                <i class="ri-file-upload-line text-md line-height-1"></i>
                                Export
                            </span>
                            <span class="">
                                <i class="ri-arrow-down-s-line"></i>
                            </span>
                        </button>
                        <ul class="dropdown-menu p-12 border bg-base shadow">
                            <li>
                                <button type="button"
                                    class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalView">
                                    <i class="ri-file-3-line"></i>
                                    PDF
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
                                    data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                    <i class="ri-file-excel-line"></i>
                                    Excel
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form class="navbar-search dt-search m-0">
                        <input type="text" class="dt-input bg-transparent radius-4" aria-controls="dataTable"
                            name="search" placeholder="Search...">
                        <iconify-icon icon="ion:search-outline" class="icon"></iconify-icon>
                    </form>
                    <div class="dropdown">
                        <button type="button"
                            class="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="d-flex align-items-center gap-1 text-secondary-light text-sm">
                                Filter
                            </span>
                            <span class="">
                                <i class="ri-arrow-down-s-line"></i>
                            </span>
                        </button>
                        <div class="dropdown-menu border bg-base shadow dropdown-menu-lg p-0">
                            <div
                                class="d-flex align-items-center justify-content-between border-bottom py-8 px-16">
                                <span class="fw-semibold text-lg text-primary-light">Filter</span>
                                <button type="button">
                                    <i class="ri-close-large-line"></i>
                                </button>
                            </div>

                            <form action="#" class="p-16">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label for="subject"
                                            class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Gender</label>
                                        <select id="subject" class="form-control form-select">
                                            <option value="Select" disabled selected>Select Subject</option>
                                            <option value="Match">Match</option>
                                            <option value="English">English</option>
                                            <option value="Bangla">Bangla</option>
                                            <option value="Economics">Economics</option>
                                            <option value="Physics">Physics</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="status"
                                            class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Status</label>
                                        <select id="status" class="form-control form-select">
                                            <option value="Select" disabled selected>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <button type="reset"
                                            class="btn btn-danger-200 text-danger-600 w-100">Reset</button>
                                    </div>
                                    <div class="col-6">
                                        <button type="submit" class="btn btn-primary-600 w-100">Apply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-8 text-secondary-light">
                    <span class="">
                        Rows per page:
                    </span>
                    <div class="dt-length">
                        <select name="dataTable_length" aria-controls="dataTable"
                            class="dt-input form-control form-select">
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="p-0">
                <table class="table bordered-table mb-0 data-table" id="dataTable" data-page-length='10'>
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="form-check style-check d-flex align-items-center">
                                    <input class="form-check-input" type="checkbox" id="selectAll">
                                    <label class="form-check-label" for="selectAll">
                                        S.L
                                    </label>
                                </div>
                            </th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Class</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Join Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(teacher, index) in teachers" :key="index">
                            <td>
                                <div class="form-check style-check d-flex align-items-center">
                                    <input class="form-check-input" type="checkbox" :id="'check' + index">
                                    <label class="form-check-label" :for="'check' + index">
                                        {{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}
                                    </label>
                                </div>
                            </td>
                            <td><span class="text-primary-600">{{ teacher.id }}</span></td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img :src="teacher.image"
                                        alt="Teacher Image" class="flex-shrink-0 me-12 radius-8">
                                    <div class="">
                                        <h6 class="text-md mb-0 fw-medium flex-grow-1">{{ teacher.name }}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>{{ teacher.subject }}</td>
                            <td>{{ teacher.class }}</td>
                            <td>{{ teacher.email }}</td>
                            <td>{{ teacher.phone }}</td>
                            <td>{{ teacher.joinDate }}</td>
                            <td>
                                <span :class="getStatusClass(teacher.status)">{{ teacher.status }}</span>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button type="button" class="text-primary-light text-xl"
                                        data-bs-toggle="dropdown" data-bs-display="static"
                                        aria-expanded="false">
                                        <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-lg-end border p-12">
                                        <li>
                                            <router-link to="/student-list"
                                                class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                <i class="ri-user-3-line"></i>
                                                View Student
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/edit-teacher"
                                                class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
                                                <i class="ri-edit-2-line"></i>
                                                Edit
                                            </router-link>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6"
                                                type="button">
                                                <i class="ri-error-warning-line"></i>
                                                Inactive
                                            </button>
                                        </li>
                                        <li>
                                            <button class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" data-bs-toggle="modal" data-bs-target="#exampleModalDelete"><i class="ri-delete-bin-6-line"></i>Delete</button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

// Import images
import img1 from '@/assets/images/thumbs/teacher-avatar-img1.png';
import img2 from '@/assets/images/thumbs/teacher-avatar-img2.png';
import img3 from '@/assets/images/thumbs/teacher-avatar-img3.png';
import img4 from '@/assets/images/thumbs/teacher-avatar-img4.png';
import img5 from '@/assets/images/thumbs/teacher-avatar-img5.png';
import img6 from '@/assets/images/thumbs/teacher-avatar-img6.png';
import img7 from '@/assets/images/thumbs/teacher-avatar-img7.png';
import img8 from '@/assets/images/thumbs/teacher-avatar-img8.png';
import img9 from '@/assets/images/thumbs/teacher-avatar-img9.png';

export default {
    name: "TeacherTable",
    setup() {
        const teachers = ref([
            { id: 'AD52365', name: 'Marvin McKinney', image: img1, subject: 'Mathematics', class: '1 (A), 2(A), 3(A)', email: 'chinthaka@hotmail.com', phone: '209.555.0104', joinDate: '05 May 2012', status: 'Active' },
            { id: 'AD52365', name: 'Ralph Edwards', image: img2, subject: 'Physics', class: '9 (A), 10 (B)', email: 'mobileip@mac.com', phone: '209.555.0104', joinDate: '05 May 2012', status: 'Inactive' },
            { id: 'AD52367', name: 'Courtney Henry', image: img3, subject: 'Biology', class: '6 (A), 7 (B)', email: 'courtney@edu.com', phone: '209.555.0134', joinDate: '18 Jan 2014', status: 'Active' },
            { id: 'AD52368', name: 'Eleanor Pena', image: img4, subject: 'Chemistry', class: '8 (B), 9 (A)', email: 'eleanor.pena@school.org', phone: '209.555.0189', joinDate: '22 Aug 2016', status: 'Inactive' },
            { id: 'AD52369', name: 'Cody Fisher', image: img5, subject: 'English', class: '5 (A), 6 (A)', email: 'cody.fisher@school.com', phone: '209.555.0192', joinDate: '14 Mar 2015', status: 'Active' },
            { id: 'AD52370', name: 'Devon Lane', image: img6, subject: 'Geography', class: '7 (C), 8 (A)', email: 'devon@edu.org', phone: '209.555.0119', joinDate: '09 Jul 2018', status: 'Active' },
            { id: 'AD52371', name: 'Bessie Cooper', image: img7, subject: 'History', class: '9 (B), 10 (A)', email: 'bessie.cooper@school.org', phone: '209.555.0156', joinDate: '23 Feb 2013', status: 'Inactive' },
            { id: 'AD52372', name: 'Arlene McCoy', image: img8, subject: 'Economics', class: '11 (B), 12 (A)', email: 'arlene.mccoy@edu.org', phone: '209.555.0172', joinDate: '16 Oct 2019', status: 'Active' },
            { id: 'AD52373', name: 'Annette Black', image: img9, subject: 'ICT', class: '8 (A), 9 (B)', email: 'annette@school.edu', phone: '209.555.0195', joinDate: '05 May 2020', status: 'Active' },
            { id: 'AD52374', name: 'Guy Hawkins', image: img2, subject: 'Accounting', class: '10 (A), 11 (A)', email: 'guy.hawkins@edu.com', phone: '209.555.0184', joinDate: '11 Dec 2017', status: 'Inactive' },
            { id: 'AD52375', name: 'Theresa Webb', image: img9, subject: 'Computer Science', class: '11 (B), 12 (A)', email: 'theresa.webb@school.edu', phone: '209.555.0217', joinDate: '29 Mar 2019', status: 'Active' },
            { id: 'AD52376', name: 'Kathryn Murphy', image: img6, subject: 'Environmental Science', class: '9 (A), 10 (B)', email: 'kathryn.murphy@college.edu', phone: '209.555.0259', joinDate: '03 Feb 2020', status: 'Inactive' },
        ]);

        const getStatusClass = (status) => {
            return status === 'Active'
                ? 'bg-success-100 text-success-600 px-24 py-4 radius-4 fw-medium text-sm'
                : 'bg-danger-100 text-danger-600 px-24 py-4 radius-4 fw-medium text-sm';
        };

        onMounted(() => {
            // Data Table initialization
            if (typeof $ !== 'undefined') {
                $('.data-table').each(function () {
                    const $table = $(this);
                    
                    if ($table.hasClass('dataTable-initialized')) return;

                    let tableInstance;
                    if ($.fn.DataTable) {
                        tableInstance = $table.DataTable({
                            pageLength: 10,
                            columnDefs: [{ orderable: false, targets: [0, 9] }] // Disable sorting on checkbox and action columns
                        });
                        $table.addClass('dataTable-initialized');
                    }

                    if (tableInstance) {
                        $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {
                            tableInstance.search(this.value).draw();
                        });

                        $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {
                            const value = $(this).val();
                            tableInstance.page.len(value).draw();
                        });
                    }
                });
            }
        });

        return {
            teachers,
            getStatusClass
        };
    }
}
</script>
