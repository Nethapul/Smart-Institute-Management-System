<template>
  <div class="card h-100">
    <div class="card-body p-0 dataTable-wrapper">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-16 px-20 py-12 border-bottom border-neutral-200">
        <div class="d-flex flex-wrap align-items-center gap-16">
          <!-- Export Dropdown -->
          <div class="dropdown">
            <button type="button" class="px-12 py-5-px border border-neutral-300 radius-8 d-flex align-items-center gap-20" data-bs-toggle="dropdown" aria-expanded="false">
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
                <button type="button" class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                  <i class="ri-file-3-line"></i>
                  PDF
                </button>
              </li>
              <li>
                <button type="button" class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10">
                  <i class="ri-file-excel-line"></i>
                  Excel
                </button>
              </li>
            </ul>
          </div>

          <!-- Search -->
          <form class="navbar-search dt-search m-0">
            <input type="text" class="dt-input bg-transparent radius-4" placeholder="Search...">
            <iconify-icon icon="ion:search-outline" class="icon"></iconify-icon>
          </form>
        </div>

        <!-- Rows per page -->
        <div class="d-flex align-items-center gap-8 text-secondary-light">
          <span class="">Rows per page:</span>
          <div class="dt-length">
            <select class="dt-input form-control form-select">
              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="p-0">
        <div class="table-responsive">
          <table class="table bordered-table mb-0 data-table" id="dataTable">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" @change="toggleAll">
                    <label class="form-check-label">S.L</label>
                  </div>
                </th>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(notice, index) in notices" :key="notice.id">
                <td>
                  <div class="form-check style-check d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" v-model="notice.selected">
                    <label class="form-check-label">{{ String(index + 1).padStart(2, '0') }}</label>
                  </div>
                </td>
                <td>{{ notice.date }}</td>
                <td>{{ notice.title }}</td>
                <td>{{ notice.description }}</td>
                <td>
                  <div class="btn-group">
                    <button type="button" class="text-primary-light text-xl" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                      <iconify-icon icon="tabler:dots-vertical"></iconify-icon>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end border p-12">
                      <li>
                        <button type="button" class="edit-sidebar-btn dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" @click="$emit('edit-notice', notice)">
                          <i class="ri-edit-2-line"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6" type="button" @click="openDeleteModal(notice.id)">
                          <i class="ri-delete-bin-6-line"></i>Delete
                        </button>
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

    <!-- Modal Delete Event start -->
    <div class="modal fade" id="exampleModalDelete" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog modal-dialog-centered max-w-340-px">
        <div class="modal-content radius-16 bg-base">
          <div class="modal-body pt-32 px-36 pb-24 text-center">
            <span class="mb-16 fs-1 line-height-1 text-danger">
              <iconify-icon icon="fluent:delete-24-regular" class="menu-icon"></iconify-icon>
            </span>
            <h6 class="text-lg fw-semibold text-primary-light mb-0">Are you sure you want to delete this notice?</h6>
            <div class="d-flex align-items-center justify-content-center gap-3 mt-24">
              <button type="reset" class="flex-grow-1 border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-24 py-11 radius-8" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" class="flex-grow-1 btn btn-primary-600 border border-primary-600 text-md px-16 py-12 radius-8" data-bs-dismiss="modal" @click="confirmDelete">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Delete Event end -->
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';

export default {
  name: "NoticeBoardTable",
  emits: ['edit-notice'],
  setup(props, { emit }) {
    const deleteId = ref(null);
    const notices = ref([
      { id: 1, date: '01 Feb 2015', title: 'General Notice', description: 'School-wide updates, reminders, and holiday schedules.', selected: false },
      { id: 2, date: '12 Mar 2016', title: 'Annual Sports Day', description: 'Details regarding sports competitions and event schedule.', selected: false },
      { id: 3, date: '05 Jun 2017', title: 'Environment Day Celebration', description: 'Tree plantation and awareness program details.', selected: false },
      { id: 4, date: '18 Nov 2017', title: 'Parent-Teacher Meeting', description: 'Invitation for all parents to discuss student progress.', selected: false },
      { id: 5, date: '22 Jan 2018', title: 'Exam Schedule', description: 'Timetable for the upcoming mid-term examinations.', selected: false },
      { id: 6, date: '09 Jul 2019', title: 'Summer Camp', description: 'Information about summer camp activities and registration.', selected: false },
      { id: 7, date: '25 Oct 2019', title: 'Library Week', description: 'Encouraging students to participate in reading challenges.', selected: false },
      { id: 8, date: '14 Feb 2020', title: 'Science Fair', description: 'Details about the annual science exhibition projects.', selected: false },
      { id: 9, date: '10 Aug 2021', title: 'Covid-19 Guidelines', description: 'Health and safety measures for reopening the campus.', selected: false },
      { id: 10, date: '30 May 2022', title: 'Exam Result Announcement', description: 'Publication of the final examination results.', selected: false },
    ]);

    const toggleAll = (event) => {
      const isChecked = event.target.checked;
      notices.value.forEach(n => n.selected = isChecked);
    };

    const openDeleteModal = (id) => {
      deleteId.value = id;
      const modal = new window.bootstrap.Modal(document.getElementById('exampleModalDelete'));
      modal.show();
    };

    const confirmDelete = () => {
      if (deleteId.value) {
        notices.value = notices.value.filter(n => n.id !== deleteId.value);
        deleteId.value = null;
        console.log('Deleted successfully');
      }
    };

    onMounted(async () => {
      await nextTick();
      if (typeof $ !== 'undefined' && $.fn.DataTable) {
        $('.data-table').each(function () {
          const $table = $(this);
          if ($table.hasClass('dataTable-initialized')) return;

          const tableInstance = $table.DataTable({
            pageLength: 10,
            columnDefs: [{ orderable: false, targets: [0, 4] }] // Disable sorting on first and last columns
          });
          
          $table.addClass('dataTable-initialized');

          // Custom Search
          $table.closest('.dataTable-wrapper').find('.dt-search .dt-input').on('keyup', function () {
            tableInstance.search(this.value).draw();
          });

          // Custom Page Length
          $table.closest('.dataTable-wrapper').find('.dt-length .dt-input').on('change', function () {
            const value = $(this).val();
            tableInstance.page.len(value).draw();
          });
        });
      }
    });

    return {
      notices,
      toggleAll,
      openDeleteModal,
      confirmDelete
    };
  }
}
</script>
