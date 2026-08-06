<template>
  <div>
    <ThemeCustomizer />
    
    <!-- Overlay -->
    <div class="overlay bg-black bg-opacity-50 w-100 h-100 position-fixed z-9 visibility-hidden opacity-0 duration-300"></div>

    <div class="d-lg-flex bg-white">
      <!-- Left Image -->
      <div class="w-50 d-lg-flex d-none overflow-hidden">
        <img src="/assets/images/thumbs/login-img.png" alt="Login Image" class="w-100 h-100 object-fit-cover">
      </div>

      <!-- Right Form -->
      <div class="lg-w-50 px-24 py-32 d-flex justify-content-center align-items-center">
        <div class="max-w-540-px mx-auto">
          <router-link to="/" class="">
            <img src="/assets/images/logo.png" alt="Logo">
          </router-link>

          <div class="mt-32 mb-32">
            <h1 class="h6 fw-bold text-primary-light mb-8">
              Welcome Back 👋
            </h1>
            <p class="text-sm text-secondary-light mb-0">
              Log in to your account to continue
            </p>
          </div>

          <form @submit.prevent="handleLogin" class="d-flex flex-column gap-32 submit-form">
            <div class="d-flex flex-column gap-16">
              <!-- Email -->
              <div>
                <label for="email" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                  Email Address
                  <span class="text-danger-600">*</span>
                </label>
                <input type="email" id="email" class="email-field form-control" placeholder="Enter your email" v-model="credentials.email" required>
              </div>

              <!-- Password -->
              <div>
                <label for="password" class="text-sm fw-semibold text-primary-light d-inline-block mb-8">
                  Password
                  <span class="text-danger-600">*</span>
                </label>
                <div class="position-relative">
                  <input :type="showPassword ? 'text' : 'password'" id="password" class="password-field form-control" placeholder="Enter your password" v-model="credentials.password" required>
                  <button type="button" @click="togglePassword" class="toggle-password btn p-0 border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light cursor-pointer" :class="showPassword ? 'ri-eye-off-line' : 'ri-eye-line'" aria-label="Toggle password visibility">
                  </button>
                </div>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="d-flex justify-content-between gap-2">
              <div class="form-check style-check d-flex align-items-center">
                <input class="form-check-input border border-neutral-400" type="checkbox" v-model="credentials.rememberMe" id="rememberMe">
                <label class="form-check-label" for="rememberMe">Remember me </label>
              </div>
              <a href="javascript:void(0)" class="text-primary-600 fw-medium text-decoration-underline">Forgot Password?</a>
            </div>

            <!-- Login Button -->
            <div class="">
              <button type="submit" class="loginBtn btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-8">
                Log In
              </button>
            </div>

            <div class="text-center text-sm text-secondary-light">
              or login as
            </div>

            <!-- Quick Login Roles -->
            <div class="d-grid sm-grid-cols-3 grid-cols-2 gap-16">
              <a href="javascript:void(0)" @click="quickLogin('super-admin')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-success text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/sheild-icon.png" alt="Icon">
                </span>
                <span class="">Super Admin</span>
              </a>
              <a href="javascript:void(0)" @click="quickLogin('admin')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-info-600 text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/dashboard-icon.png" alt="Icon">
                </span>
                <span class="">Admin</span>
              </a>
              <a href="javascript:void(0)" @click="quickLogin('student')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-warning-600 text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/student-icon.png" alt="Icon">
                </span>
                <span class="">Student</span>
              </a>
              <a href="javascript:void(0)" @click="quickLogin('teacher')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-purple-600 text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/teacher-icon.png" alt="Icon">
                </span>
                <span class="">Teacher</span>
              </a>
              <a href="javascript:void(0)" @click="quickLogin('guardian')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-primary-600 text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/guardian-icon.png" alt="Icon">
                </span>
                <span class="">Guardians </span>
              </a>
              <a href="javascript:void(0)" @click="quickLogin('librarian')" class="d-flex align-items-center gap-8 fw-semibold text-sm radius-6 justify-content-center flex-grow-1 bg-pink text-white py-10 px-8">
                <span class="d-flex">
                  <img src="/assets/images/icons/library-icon.png" alt="Icon">
                </span>
                <span class="">Librarian</span>
              </a>
            </div>
          </form>

          <!-- Register Link -->
          <div class="mt-32 text-center text-sm">
            Don't have an account?
            <router-link to="/register" class="text-primary-600 fw-semibold text-decoration-underline">
              Create an account
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';

export default {
  name: "LoginPage",
  components: {
    ThemeCustomizer
  },
  setup() {
    const router = useRouter();
    const showPassword = ref(false);

    const credentials = ref({
      email: '',
      password: '',
      rememberMe: false
    });

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = () => {
      console.log('Login attempt with:', credentials.value);
      // Add your login logic here
      // After successful login, redirect to dashboard
      router.push('/');
    };

    const quickLogin = (role) => {
      console.log('Quick login as:', role);
      // Add your quick login logic here based on role
      router.push('/');
    };

    return {
      credentials,
      showPassword,
      togglePassword,
      handleLogin,
      quickLogin
    };
  }
}
</script>

<style scoped>
.lg-w-50 {
  width: 100%;
}

@media (min-width: 992px) {
  .lg-w-50 {
    width: 50%;
  }
}

.max-w-540-px {
  max-width: 540px;
}

.sm-grid-cols-3 {
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 576px) {
  .sm-grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}
</style>
