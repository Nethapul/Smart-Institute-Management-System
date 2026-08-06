<template>
  <div>
    <ThemeCustomizer />
    
    <!-- Overlay for sidebars -->
    <div class="overlay bg-black bg-opacity-50 w-100 h-100 position-fixed z-9 visibility-hidden opacity-0 duration-300"></div>

    <Sidebar />

    <main class="dashboard-main">
      <Navbar />

      <div class="dashboard-main-body">
        <Breadcrumb />
        <NotificationForm />
      </div>

      <Footer />
    </main>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navabar.vue';
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';

// Page Components
import Breadcrumb from '@/components/settings/notification/Breadcrumb.vue';
import NotificationForm from '@/components/settings/notification/NotificationForm.vue';

export default {
  name: "NotificationSettings",
  components: {
    Sidebar,
    Navbar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    NotificationForm
  },
  setup() {
    onMounted(() => {
     // Initialization logic if required
    });
  }
}
</script>
