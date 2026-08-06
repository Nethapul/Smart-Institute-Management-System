<template>
  <button type="button" @click="toggleCustomizer"
    class="theme-customization__button w-48-px h-48-px bg-primary-600 text-white rounded-circle d-flex justify-content-center align-items-center position-fixed end-0 bottom-0 mb-40 me-40 text-2xxl bg-hover-primary-700 z-999"
    aria-label="Theme Customization Button">
    <i class="ri-settings-3-line animate-spin"></i>
  </button>
  <div class="theme-customization-sidebar w-100 bg-base h-100vh overflow-y-auto position-fixed end-0 top-0 z-999" :class="{ 'active': isOpen }">
    <div class="d-flex align-items-center gap-3 py-16 px-24 justify-content-between border-bottom">
      <div>
        <h6 class="text-sm dark:text-white">Theme Settings</h6>
        <p class="text-xs mb-0 text-neutral-500 dark:text-neutral-200">Customize and preview instantly</p>
      </div>
      <button type="button" @click="toggleCustomizer"
        class="theme-customization-sidebar__close text-neutral-900 bg-transparent text-hover-primary-600 d-flex text-xl">
        <i class="ri-close-fill"></i>
      </button>
    </div>

    <div class="d-flex flex-column gap-48 p-24 overflow-y-auto flex-grow-1">

      <div class="theme-setting-item">
        <h6 class="fw-medium text-primary-light text-md mb-3">Theme Mode</h6>
        <div class="d-grid grid-cols-3 gap-3 dark-light-mode">
          <button type="button"
            class="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl"
            :class="{ 'active': themeMode === 'light' }"
            @click="setTheme('light')" aria-label="light">
            <i class="ri-sun-line"></i>
          </button>
          <button type="button"
            class="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl"
            :class="{ 'active': themeMode === 'dark' }"
            @click="setTheme('dark')" aria-label="dark">
            <i class="ri-moon-line"></i>
          </button>
          <button type="button"
            class="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl"
            :class="{ 'active': themeMode === 'system' }"
            @click="setTheme('system')" aria-label="system">
            <i class="ri-computer-line"></i>
          </button>
        </div>
      </div>

      <div class="theme-setting-item">
        <h6 class="fw-medium text-primary-light text-md mb-3">Page Direction</h6>
        <div class="d-grid grid-cols-2 gap-3">
          <button type="button"
            class="theme-setting-item__btn ltr-mode-btn d-flex align-items-center justify-content-center gap-2 h-56-px rounded-3 text-xl"
            :class="{ 'active': direction === 'ltr' }"
            @click="setDirection('ltr')" aria-label="LTR">
            <span><i class="ri-align-item-left-line"></i></span>
            <span class="h6 text-sm font-medium mb-0">LTR</span>
          </button>

          <button type="button"
            class="theme-setting-item__btn rtl-mode-btn d-flex align-items-center justify-content-center gap-2 h-56-px rounded-3 text-xl"
            :class="{ 'active': direction === 'rtl' }"
            @click="setDirection('rtl')" aria-label="RTL">
            <span class="h6 text-sm font-medium mb-0">RTL</span>
            <span><i class="ri-align-item-right-line"></i></span>
          </button>
        </div>
      </div>

      <div class="theme-setting-item">
        <h6 class="fw-medium text-primary-light text-md mb-3">Color Schema</h6>
        <div class="d-grid grid-cols-3 gap-3">
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
            @click="setColor('base')" :class="{ 'active': activeColor === 'base' }" aria-label="Base">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #25A194;"></span>
            <span class="fw-medium mt-1" style="color: #25A194;">Base</span>
          </button>
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
             @click="setColor('red')" :class="{ 'active': activeColor === 'red' }" aria-label="Red">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #dc2626;"></span>
            <span class="fw-medium mt-1" style="color: #dc2626;">Red</span>
          </button>
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
             @click="setColor('blue')" :class="{ 'active': activeColor === 'blue' }" aria-label="Blue">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #2563eb;"></span>
            <span class="fw-medium mt-1" style="color: #2563eb;">Blue</span>
          </button>
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
             @click="setColor('yellow')" :class="{ 'active': activeColor === 'yellow' }" aria-label="Yellow">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #ff9f29;"></span>
            <span class="fw-medium mt-1" style="color: #ff9f29;">Yellow</span>
          </button>
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
             @click="setColor('cyan')" :class="{ 'active': activeColor === 'cyan' }" aria-label="Cyan">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #00b8f2;"></span>
            <span class="fw-medium mt-1" style="color: #00b8f2;">Cyan</span>
          </button>
          <button type="button" class="color-picker-btn d-flex flex-column justify-content-center align-items-center"
             @click="setColor('violet')" :class="{ 'active': activeColor === 'violet' }" aria-label="Violet">
            <span class="color-picker-btn__box h-40-px w-100 rounded-3" style="background-color: #7c3aed;"></span>
            <span class="fw-medium mt-1" style="color: #7c3aed;">Violet</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeCustomizer",
  data() {
    return {
      isOpen: false,
      themeMode: 'light',
      direction: 'ltr',
      activeColor: 'base'
    };
  },
  mounted() {
    // Initialize theme from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
        // Default to light or check system
        this.setTheme('light');
    }

    // Initialize Direction
    const savedDir = localStorage.getItem('direction');
    if (savedDir) {
        this.setDirection(savedDir);
    }

    // Initialize Color
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
        this.setColor(savedColor);
    }
  },
  methods: {
    toggleCustomizer() {
      this.isOpen = !this.isOpen;
    },
    setTheme(mode) {
      this.themeMode = mode;
      localStorage.setItem('theme', mode);
      
      if (mode === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', mode);
      }
    },
    setDirection(dir) {
      this.direction = dir;
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('direction', dir);
    },
    setColor(color) {
      this.activeColor = color;
      
      const colors = {
        base: "#25A194",
        red: "#dc2626",
        blue: "#2563eb",
        yellow: "#ff9f29",
        cyan: "#00b8f2",
        violet: "#7c3aed",
      };
      
      const hexColor = colors[color];
      
      if (hexColor) {
        document.documentElement.style.setProperty("--primary-600", hexColor);
        localStorage.setItem('color', color);
      }
    }
  }
}
</script>
