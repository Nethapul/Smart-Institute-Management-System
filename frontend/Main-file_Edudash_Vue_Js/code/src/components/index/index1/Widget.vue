<template>
  <div class="card shadow-1 radius-8 h-100" :class="gradientBg">
    <div class="card-body p-20">
      <div class="d-flex flex-wrap align-items-center gap-3 mb-16">
        <div class="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center"
          :class="iconColor">
          <img :src="icon" alt="Icon">
        </div>
        <p class="fw-medium text-primary-light mb-1">{{ title }}</p>
      </div>
      <h6 class="mb-0">{{ count }}</h6>
      <p class="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
        <span class="d-inline-flex align-items-center gap-1 text-primary-600 text-sm fw-semibold">
          10%
          <iconify-icon icon="bxs:up-arrow" class="text-xs"></iconify-icon>
        </span>
        +5 This Month
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Widget",
  props: {
    gradientBg: {
      type: String,
      default: 'gradient-bg-end-1'
    },
    iconColor: {
      type: String,
      default: 'bg-primary-600'
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    count: {
      type: String,
      required: true
    }
  }
}
</script>
