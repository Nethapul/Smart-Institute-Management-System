<template>
  <div class="card radius-12 border-0 h-100">
    <div
      class="d-flex align-items-center flex-wrap gap-2 justify-content-between py-12 px-20 border-bottom border-neutral-200">
      <h6 class="mb-2 fw-bold text-lg">Top Student</h6>
      <div class="dropdown">
        <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <iconify-icon icon="entypo:dots-three-vertical" class="icon text-secondary-light"></iconify-icon>
        </button>
        <ul class="dropdown-menu p-12 border bg-base shadow">
          <li>
            <button type="button"
              class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
              data-bs-toggle="modal" data-bs-target="#exampleModalView">
              <iconify-icon icon="hugeicons:view" class="icon text-lg line-height-1"></iconify-icon>
              View
            </button>
          </li>
          <li>
            <button type="button"
              class="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10"
              data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
              <iconify-icon icon="lucide:edit" class="icon text-lg line-height-1"></iconify-icon>
              Edit
            </button>
          </li>
          <li>
            <button type="button"
              class="delete-item dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10"
              data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
              <iconify-icon icon="fluent:delete-24-regular" class="icon text-lg line-height-1"></iconify-icon>
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex flex-column gap-28">
        <div v-for="(student, index) in students" :key="index"
          class="d-flex align-items-center justify-content-between gap-10">
          <div class="d-flex align-items-center gap-12">
            <span class="w-44-px h-44-px rounded-circle d-flex justify-content-center align-items-center">
              <img :src="student.image" class="w-44-px h-44-px object-fit-cover rounded-circle" alt="Icon">
            </span>
            <div class="">
              <h6 class="text-sm mb-2">{{ student.name }}</h6>
              <span class="text-xs text-secondary-light">{{ student.class }}</span>
            </div>
          </div>
          <div class="d-flex align-items-center gap-8">
            <span class="text-sm text-secondary-light">Marks</span>
            <span class="text-primary-light text-sm d-block text-end">
              <svg class="radial-progress w-44-px" :data-percentage="student.marks" viewBox="0 0 80 80">
                <circle :class="`incomplete stroke-8-px opacity-02 ${student.strokeColor}`" cx="40" cy="40" r="35">
                </circle>
                <circle :class="`complete stroke-8-px ${student.strokeColor}`" cx="40" cy="40" r="35"
                  style="stroke-dashoffset: 220;">
                </circle>
                <text class="percentage fill-black" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">{{
                  student.marks }}</text>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopStudent",
  data() {
    return {
      students: [
        {
          name: "Brooklyn Simmons",
          class: "Class: Six",
          image: "/assets/images/thumbs/avatar-img1.png",
          marks: 20,
          strokeColor: "stroke-blue"
        },
        {
          name: "Floyd Miles",
          class: "Class: Seven",
          image: "/assets/images/thumbs/avatar-img2.png",
          marks: 35,
          strokeColor: "stroke-red"
        },
        {
          name: "Courtney Henry",
          class: "Class: Eight",
          image: "/assets/images/thumbs/avatar-img2.png",
          marks: 45,
          strokeColor: "stroke-warning"
        },
        {
          name: "Kathryn Murphy",
          class: "Class: Nine",
          image: "/assets/images/thumbs/avatar-img4.png",
          marks: 65,
          strokeColor: "stroke-green"
        },
        {
          name: "Annette Black",
          class: "Class: Ten",
          image: "/assets/images/thumbs/avatar-img5.png",
          marks: 65,
          strokeColor: "stroke-blue"
        }
      ]
    };
  },
  mounted() {
    this.animateProgress();
    window.addEventListener('scroll', this.animateProgress);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animateProgress);
  },
  methods: {
    animateProgress() {
      const svgs = this.$el.querySelectorAll('svg.radial-progress');
      svgs.forEach((svg) => {
        const rect = svg.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const percent = svg.getAttribute('data-percentage');
          const radius = svg.querySelector('circle.complete').getAttribute('r');
          const circumference = 2 * Math.PI * radius;
          const strokeDashOffset = circumference - ((percent * circumference) / 100);
          
          const circle = svg.querySelector('circle.complete');
          circle.style.transition = "stroke-dashoffset 1.25s ease-in-out";
          circle.style.strokeDashoffset = strokeDashOffset;
        }
      });
    }
  }
}
</script>
