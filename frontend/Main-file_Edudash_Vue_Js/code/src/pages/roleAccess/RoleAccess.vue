<template>
  <div>
    <Sidebar />

    <main class="dashboard-main">
    <Navbar />
      <div class="dashboard-main-body">
        <Breadcrumb @open-add-sidebar="isAddSidebarOpen = true" />

        <div class="mt-24">
          <RoleList @edit-role="openEditSidebar" />
        </div>
      </div>

      <Footer />
    </main>

    <ThemeCustomizer />

    <RoleAddSidebar :isOpen="isAddSidebarOpen" @close="isAddSidebarOpen = false" />
    <RoleEditSidebar :isOpen="isEditSidebarOpen" :role="selectedRole" @close="isEditSidebarOpen = false" />

    <div class="overlay bg-black bg-opacity-50 w-100 h-100 position-fixed z-9 opacity-0 duration-300" :class="{ 'visibility-hidden': !isSidebarOpen, 'active': isSidebarOpen }" @click="closeSidebar"></div>

  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navabar.vue';
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';
import Breadcrumb from '@/components/roleAccess/Breadcrumb.vue';
import RoleList from '@/components/roleAccess/RoleList.vue';
import RoleAddSidebar from '@/components/roleAccess/RoleAddSidebar.vue';
import RoleEditSidebar from '@/components/roleAccess/RoleEditSidebar.vue';

export default {
  name: "RoleAccess",
  components: {
    Sidebar,
    Navbar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    RoleList,
    RoleAddSidebar,
    RoleEditSidebar
  },
  setup() {
    const isAddSidebarOpen = ref(false);
    const isEditSidebarOpen = ref(false);
    const selectedRole = ref(null);

    const isSidebarOpen = computed(() => isAddSidebarOpen.value || isEditSidebarOpen.value);

    const openEditSidebar = (role) => {
      selectedRole.value = role;
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
      selectedRole,
      openEditSidebar,
      closeSidebar
    };
  }
}
</script>
