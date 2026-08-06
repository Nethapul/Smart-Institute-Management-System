<template>
  <div>
    <Sidebar />

    <main class="dashboard-main">
    <Navbar />
      <div class="dashboard-main-body">
        <Breadcrumb @open-add-sidebar="openAddSidebar" />

        <div class="mt-24">
          <NoticeBoardTable @edit-notice="openEditSidebar" />
        </div>
      </div>

      <Footer />
    </main>

    <ThemeCustomizer />

    <!-- Add sidebar start -->
    <div class="my-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300" :class="{ 'active': isAddSidebarOpen }">
      <div class="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
        <h5 class="text-lg mb-0">Add Notice</h5>
        <button type="button" class="close-my-sidebar text-danger-600 text-lg d-flex" @click="closeSidebar">
          <i class="ri-close-large-line"></i>
        </button>
      </div>
      <form action="#" class="d-flex flex-column p-20">
        <div class="row g-3">
          <div class="col-sm-12">
            <div class="">
              <label for="myTitle" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Title</label>
              <input type="text" class="form-control" id="myTitle" placeholder="Enter title">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="">
              <label for="date" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date</label>
              <input type="date" class="form-control" id="date">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="">
              <label for="description" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Description</label>
              <textarea class="form-control" id="description" placeholder="Enter Description"></textarea>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-center gap-3 mt-8">
              <button type="reset" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8" @click="closeSidebar">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Add sidebar end -->

    <!-- Edit sidebar start -->
    <div class="edit-sidebar bg-white position-fixed end-0 top-0 h-100vh overflow-y-auto z-99 max-w-700-px w-100 translate-x-full duration-300" :class="{ 'active': isEditSidebarOpen }">
      <div class="px-20 py-12 border-bottom d-flex align-items-center justify-content-between gap-20">
        <h5 class="text-lg mb-0">Edit Notice </h5>
        <button type="button" class="close-edit-sidebar text-danger-600 text-lg d-flex" @click="closeSidebar">
          <i class="ri-close-large-line"></i>
        </button>
      </div>
      <form action="#" class="d-flex flex-column p-20">
        <div class="row g-3">
          <div class="col-sm-12">
            <div class="">
              <label for="designationNameEdit" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Designation Name</label>
              <input type="text" class="form-control" id="designationNameEdit" placeholder="Enter designation name" v-model="editForm.title">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="">
              <label for="dateEdit" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Date</label>
              <input type="date" class="form-control" id="dateEdit" v-model="editForm.date_raw">
            </div>
          </div>
          <div class="col-sm-12">
            <div class="">
              <label for="descriptionEdit" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">Description</label>
              <textarea class="form-control" id="descriptionEdit" placeholder="Enter Description" v-model="editForm.description"></textarea>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-center gap-3 mt-8">
              <button type="reset" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8" @click="closeSidebar">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8 max-w-156-px w-100">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- Edit sidebar end -->

    <!-- Overlay -->
    <div class="overlay bg-black bg-opacity-50 w-100 h-100 position-fixed z-9 visibility-hidden opacity-0 duration-300" :class="{ 'active': isSidebarOpen }" @click="closeSidebar"></div>

  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navabar.vue';
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';
import Breadcrumb from '@/components/noticeBoard/Breadcrumb.vue';
import NoticeBoardTable from '@/components/noticeBoard/NoticeBoardTable.vue';

export default {
  name: "NoticeBoard",
  components: {
    Sidebar,
    Navbar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    NoticeBoardTable
  },
  setup() {
    const isAddSidebarOpen = ref(false);
    const isEditSidebarOpen = ref(false);
    const editForm = ref({ title: '', date_raw: '', description: '' });

    const isSidebarOpen = computed(() => isAddSidebarOpen.value || isEditSidebarOpen.value);

    const openAddSidebar = () => {
      isAddSidebarOpen.value = true;
    };

    const openEditSidebar = (notice) => {
      // Basic formatting for date input (YYYY-MM-DD) if 'date' is in 'DD MMM YYYY' format
      // This is a simple mock conversion for the demo; in a real app use a date library
      let dateRaw = '';
      if(notice.date) {
        const parts = notice.date.split(' ');
        if(parts.length === 3) {
           const months = {Jan:'01', Feb:'02', Mar:'03', Apr:'04', May:'05', Jun:'06', Jul:'07', Aug:'08', Sep:'09', Oct:'10', Nov:'11', Dec:'12'};
           dateRaw = `${parts[2]}-${months[parts[1]]}-${parts[0]}`;
        }
      }

      editForm.value = { 
        ...notice,
        date_raw: dateRaw 
      };
      isEditSidebarOpen.value = true;
    };

    const closeSidebar = () => {
      isAddSidebarOpen.value = false;
      isEditSidebarOpen.value = false;
    };

    return {
      isAddSidebarOpen,
      isEditSidebarOpen,
      isSidebarOpen,
      editForm,
      openAddSidebar,
      openEditSidebar,
      closeSidebar
    };
  }
}
</script>

<style scoped>
.my-sidebar.active,
.edit-sidebar.active {
  transform: translateX(0);
}

.overlay.active {
  visibility: visible;
  opacity: 1;
}
</style>
