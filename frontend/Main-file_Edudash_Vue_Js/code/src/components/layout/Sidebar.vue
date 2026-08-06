<template>
  <div class="overlay bg-black bg-opacity-50 w-100 h-100 position-fixed z-9 visibility-hidden opacity-0 duration-300"></div>
  <aside class="sidebar" style="z-index: 999">
    <button type="button" class="sidebar-close-btn">
      <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
    </button>
    <div class="">
      <div class="sidebar-logo d-flex align-items-center justify-content-between">
        <router-link to="/" class="">
          <img src="/assets/images/logo.png" alt="site logo" class="light-logo">
          <img src="/assets/images/logo-light.png" alt="site logo" class="dark-logo">
          <img src="/assets/images/logo-icon.png" alt="site logo" class="logo-icon">
        </router-link>
        <button type="button" class="text-xxl d-xl-flex d-none line-height-1 sidebar-toggle text-neutral-500"
          aria-label="Collapse Sidebar">
          <i class="ri-contract-left-line"></i>
        </button>
      </div>
    </div>
    <!-- User Info start -->
    <div class="mx-16 py-12">
      <div class="dropdown profile-dropdown">
        <button type="button"
          class="profile-dropdown__button d-flex align-items-center justify-content-between p-10 w-100 overflow-hidden bg-neutral-50 radius-12 "
          data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          <span class="d-flex align-items-start gap-10">
            <img src="/assets/images/thumbs/leave-request-img2.png" alt="Thumbnail"
              class="w-40-px h-40-px rounded-circle object-fit-cover flex-shrink-0">
            <span class="profile-dropdown__contents">
              <span class="h6 mb-0 text-md d-block text-primary-light">Jone Copper</span>
              <span class="text-secondary-light text-sm mb-0 d-block">Admin</span>
            </span>
          </span>
          <span class="profile-dropdown__icon pe-8 text-xl d-flex line-height-1">
            <i class="ri-arrow-right-s-line"></i>
          </span>
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end border p-12">
          <li>
            <router-link to="/student-details"
              class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
              <i class="ri-user-3-line"></i>
              My Profile
            </router-link>
          </li>
          <li>
            <router-link to="/general"
              class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
              <i class="ri-settings-3-line"></i>
              Setting
            </router-link>
          </li>
          <li>
            <router-link to="/login"
              class="dropdown-item rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2 py-6">
              <i class="ri-shut-down-line"></i>
              Log Out
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- User Info end -->
    <div class="sidebar-menu-area">
      <ul class="sidebar-menu" id="sidebar-menu">
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-home-4-line"></i>
            <span>Dashboard </span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                School
              </router-link>
            </li>
            <li>
              <router-link to="/index-2">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Student
              </router-link>
            </li>
            <li>
              <router-link to="/index-3">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Teacher
              </router-link>
            </li>
            <li>
              <router-link to="/index-4">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Parent
              </router-link>
            </li>
            <li>
              <router-link to="/index-5">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                LMS 
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-graduation-cap-line"></i>
            <span>Students</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/add-new-student">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Add New Student
              </router-link>
            </li>
            <li>
              <router-link to="/student-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Student List
              </router-link>
            </li>
            <li>
              <router-link to="/suspended-student">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Suspend Student
              </router-link>
            </li>
            <li>
              <router-link to="/student-category">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Student Categories
              </router-link>
            </li>
            <li>
              <router-link to="/edit-student">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Edit Student
              </router-link>
            </li>
            <li>
              <router-link to="/student-details">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Student Details
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-user-follow-line"></i>
            <span>Teachers</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/add-new-teacher">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Add New Teacher
              </router-link>
            </li>
            <li>
              <router-link to="/teacher-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Teacher List
              </router-link>
            </li>
            <li>
              <router-link to="/edit-teacher">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Edit Teacher
              </router-link>
            </li>
            <li>
              <router-link to="/teacher-details">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Teacher Details
              </router-link>
            </li>
            <li>
              <router-link to="/teacher-timetable">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Teacher Timetable
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-account-circle-line"></i>
            <span>Guardian</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/add-new-guardian">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Add New Guardians
              </router-link>
            </li>
            <li>
              <router-link to="/guardian-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Guardians List
              </router-link>
            </li>
            <li>
              <router-link to="/edit-guardian">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Edit Guardian
              </router-link>
            </li>
            <li>
              <router-link to="/guardian-details">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Guardian Details
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-list-view"></i>
            <span>Classes</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/section-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Section
              </router-link>
            </li>
            <li>
              <router-link to="/subject-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Subjects
              </router-link>
            </li>
            <li>
              <router-link to="/class-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Class List
              </router-link>
            </li>
            <li>
              <router-link to="/class-room-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Class Room
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-file-edit-line"></i>
            <span>Examinations</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/exam">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Exam
              </router-link>
            </li>
            <li>
              <router-link to="/exam-schedule">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Exam Schedule
              </router-link>
            </li>
            <li>
              <router-link to="/exam-result">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Exam Result
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-money-dollar-circle-line"></i>
            <span>Fees Collection</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/fees-collect">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Fees Collect
              </router-link>
            </li>
            <li>
              <router-link to="/fees-type">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Fees Type
              </router-link>
            </li>
            <li>
              <router-link to="/fees-group">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Fees Group
              </router-link>
            </li>
            <li>
              <router-link to="/fees-discount">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Fees Discount
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-calendar-check-line"></i>
            <span>Attendance</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/student-attendance">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Student Attendance
              </router-link>
            </li>
            <li>
              <router-link to="/teacher-attendance">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Teacher Attendance
              </router-link>
            </li>
            <li>
              <router-link to="/employee-attendance">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Employee Attendance
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-time-line"></i>
            <span>Leaves</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/leave-types">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Leave Types
              </router-link>
            </li>
            <li>
              <router-link to="/leave-request">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Leave Request
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/certificate">
            <i class="ri-home-4-line"></i>
            <span>Certificate </span>
          </router-link>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-book-2-line"></i>
            <span>Library</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/books-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Books List
              </router-link>
            </li>
            <li>
              <router-link to="/members-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Members List
              </router-link>
            </li>
            <li>
              <router-link to="/member-details">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Members Details
              </router-link>
            </li>
            <li>
              <router-link to="/issue-return">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Issue Return
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-money-dollar-circle-line"></i>
            <span>Accounts</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/income-head">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Income Head
              </router-link>
            </li>
            <li>
              <router-link to="/income-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Income List
              </router-link>
            </li>
            <li>
              <router-link to="/expense-head">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Expense Head
              </router-link>
            </li>
            <li>
              <router-link to="/expense-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Expense List
              </router-link>
            </li>
            <li>
              <router-link to="/transaction">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Transaction
              </router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="javascript:void(0)">
            <i class="ri-user-settings-line"></i>
            <span>HRM</span>
          </a>
          <ul class="sidebar-submenu">
            <li>
              <router-link to="/employee-list">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Employee List
              </router-link>
            </li>
            <li>
              <router-link to="/employee-details">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Employee Details
              </router-link>
            </li>
            <li>
              <router-link to="/add-new-employee">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Add New Employee
              </router-link>
            </li>
            <li>
              <router-link to="/payroll">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Payroll
              </router-link>
            </li>
            <li>
              <router-link to="/designation">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Designation
              </router-link>
            </li>
            <li>
              <router-link to="/department">
                <i class="ri-circle-fill circle-icon w-auto"></i>
                Department
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/notice-board">
            <i class="ri-booklet-line"></i>
            <span>Notice Board </span>
          </router-link>
        </li>
        <li>
          <router-link to="/event">
            <i class="ri-calendar-event-line"></i>
            <span>Event </span>
          </router-link>
        </li>
        <li>
          <router-link to="/message">
            <i class="ri-message-2-line"></i>
            <span>Message </span>
          </router-link>
        </li>
        <li>
          <router-link to="/subscription-plan">
            <i class="ri-price-tag-3-line"></i>
            <span>Subscription Plan </span>
          </router-link>
        </li>
        <li>
          <router-link to="/role-access">
            <i class="ri-macbook-line"></i>
            <span>Role & Access</span>
          </router-link>
        </li>
         <li class="dropdown">
        <a href="javascript:void(0)">
          <i class="ri-shield-check-line"></i>
          <span>Authentication</span>
        </a>
        <ul class="sidebar-submenu">
          <li>
            <router-link to="/login"><i class="ri-circle-fill circle-icon text-primary-600 w-auto"></i> Login</router-link>
          </li>
          <li>
            <router-link to="/register"><i class="ri-circle-fill circle-icon text-warning-main w-auto"></i> Register</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/assign-role-plan">
          <i class="ri-user-follow-line"></i>
          <span>Assign Role</span>
        </router-link>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)">
          <i class="ri-user-settings-line"></i>
          <span>Settings</span>
        </a>
        <ul class="sidebar-submenu">
          <li>
            <router-link to="/general">
              <i class="ri-circle-fill circle-icon w-auto"></i>
              General
            </router-link>
          </li>
          <li>
            <router-link to="/notification">
              <i class="ri-circle-fill circle-icon w-auto"></i>
              Notification
            </router-link>
          </li>
          <li>
            <router-link to="/currencies">
              <i class="ri-circle-fill circle-icon w-auto"></i>
              Currencies
            </router-link>
          </li>
          <li>
            <router-link to="/languages">
              <i class="ri-circle-fill circle-icon w-auto"></i>
              Languages
            </router-link>
          </li>
        </ul>
      </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute();

    const checkAndSetActiveMenu = () => {
      // Use nextTick to ensure Vue Router has applied classes
      setTimeout(() => {
        const sidebarMenus = document.querySelectorAll('.sidebar-menu .dropdown > a');
        
        sidebarMenus.forEach((menu) => {
          const parent = menu.parentElement;
          const submenu = parent.querySelector('.sidebar-submenu');
          const submenuLinks = submenu ? submenu.querySelectorAll('a') : [];

          // Check if any submenu link has router-link-active or router-link-exact-active class
          let isActive = false;
          submenuLinks.forEach(link => {
            if (link.classList.contains('router-link-active') || 
                link.classList.contains('router-link-exact-active')) {
              isActive = true;
            }
          });

          // If active, open the menu
          if (isActive) {
            parent.classList.add('open');
            if(submenu) submenu.style.display = 'block';
          } else {
            parent.classList.remove('open');
            if(submenu) submenu.style.display = 'none';
          }
        });
      }, 50);
    };

    onMounted(() => {
      // Initial check for active menu
      checkAndSetActiveMenu();

      // Sidebar Menu Toggle
      const sidebarMenus = document.querySelectorAll('.sidebar-menu .dropdown > a');

      sidebarMenus.forEach((menu) => {
        const parent = menu.parentElement;
        const submenu = parent.querySelector('.sidebar-submenu');

        menu.addEventListener('click', function (e) {
          e.preventDefault();
          
          // Close other open menus
          document.querySelectorAll('.sidebar-menu .dropdown.open').forEach((openMenu) => {
            if (openMenu !== parent) {
              openMenu.classList.remove('open');
              const otherSubmenu = openMenu.querySelector('.sidebar-submenu');
              if (otherSubmenu) {
                otherSubmenu.style.display = 'none';
              }
            }
          });

          // Toggle current menu
          parent.classList.toggle('open');
          if (submenu) {
            if (parent.classList.contains('open')) {
              submenu.style.display = 'block';
            } else {
              submenu.style.display = 'none';
            }
          }
        });
      });


      // Sidebar Mobile Toggle - Handled by Navbar component
      // The toggle button click is handled in Navabar.vue
      const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay'); 

      if(sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', () => {
          sidebar.classList.remove('sidebar-open');
          sidebar.classList.remove('open');
          overlay.classList.remove('visibility-visible', 'opacity-100');
          overlay.classList.add('visibility-hidden', 'opacity-0');
        });
      }
      
      if(overlay) {
        overlay.addEventListener('click', () => {
          sidebar.classList.remove('sidebar-open');
          sidebar.classList.remove('open');
          overlay.classList.remove('visibility-visible', 'opacity-100');
          overlay.classList.add('visibility-hidden', 'opacity-0');
        });
      }

      // Sidebar Desktop Toggle
      const sidebarDesktopToggle = document.querySelector('.sidebar-toggle');
      if(sidebarDesktopToggle) {
        sidebarDesktopToggle.addEventListener('click', () => {
          const sidebar = document.querySelector('.sidebar');
          const main = document.querySelector('.dashboard-main');
          if(sidebar) sidebar.classList.toggle('active');
          if(main) main.classList.toggle('active');
          sidebarDesktopToggle.classList.toggle('active');
        });
      }
    });

    // Watch for route changes and update active menu
    watch(() => route.path, () => {
      checkAndSetActiveMenu();
    });

    return {};
  }
}
</script>
