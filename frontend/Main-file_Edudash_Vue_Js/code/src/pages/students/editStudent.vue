<template>
  <Sidebar />
  <main class="dashboard-main">
    <Navbar />
    <div class="dashboard-main-body">
      <Breadcrumb />

      <form action="#" class="mt-24">
        <div class="row gy-3">
          <div class="col-lg-12">
            <PersonalInfo />
          </div>
          <div class="col-lg-12">
            <ParentGuardianInfo />
          </div>
          <div class="col-lg-12">
            <MedicalDetails />
          </div>
          <div class="col-lg-12">
            <BankDetails />
          </div>
          <div class="col-xxl-6">
            <PreviousSchoolDetails />
          </div>
          <div class="col-xxl-6">
            <AddressDetails />
          </div>
          <div class="col-xxl-6">
            <HostelDetails />
          </div>
          <div class="col-xxl-6">
            <UploadDocuments />
          </div>
          <div class="col-xl-12">
            <StudentDetails />
          </div>
          <div class="col-xl-12">
            <LoginDetails />
          </div>
          <div class="col-12">
            <div class="d-flex align-items-center justify-content-center gap-3 mt-8">
              <button type="reset"
                class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8">
                Cancel
              </button>
              <button type="submit"
                class="btn btn-primary-600 border border-primary-600 text-md px-28 py-12 radius-8">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </main>
  <ThemeCustomizer />
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navabar.vue'; // Corrected import path
import Footer from '@/components/layout/Footer.vue';
import ThemeCustomizer from '@/components/layout/ThemeCustomizer.vue';

// Page Components
import Breadcrumb from '@/components/students/editStudent/Breadcrumb.vue';
import PersonalInfo from '@/components/students/editStudent/PersonalInfo.vue';
import ParentGuardianInfo from '@/components/students/editStudent/ParentGuardianInfo.vue';
import MedicalDetails from '@/components/students/editStudent/MedicalDetails.vue';
import BankDetails from '@/components/students/editStudent/BankDetails.vue';
import PreviousSchoolDetails from '@/components/students/editStudent/PreviousSchoolDetails.vue';
import AddressDetails from '@/components/students/editStudent/AddressDetails.vue';
import HostelDetails from '@/components/students/editStudent/HostelDetails.vue';
import UploadDocuments from '@/components/students/editStudent/UploadDocuments.vue';
import StudentDetails from '@/components/students/editStudent/StudentDetails.vue';
import LoginDetails from '@/components/students/editStudent/LoginDetails.vue';
import { onMounted } from 'vue';

export default {
  name: "EditStudent",
  components: {
    Sidebar,
    Navbar,
    Footer,
    ThemeCustomizer,
    Breadcrumb,
    PersonalInfo,
    ParentGuardianInfo,
    MedicalDetails,
    BankDetails,
    PreviousSchoolDetails,
    AddressDetails,
    HostelDetails,
    UploadDocuments,
    StudentDetails,
    LoginDetails
  },
  setup() {
     onMounted(() => {
        // Drag & Drop Upload photo Js
        document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
            const dropZoneElement = inputElement.closest(".drop-zone");

            dropZoneElement.addEventListener("click", (e) => {
                inputElement.click();
            });

            inputElement.addEventListener("change", (e) => {
                if (inputElement.files.length) {
                    updateThumbnail(dropZoneElement, inputElement.files[0]);
                }
            });

            dropZoneElement.addEventListener("dragover", (e) => {
                e.preventDefault();
                dropZoneElement.classList.add("drop-zone--over");
            });

            ["dragleave", "dragend"].forEach((type) => {
                dropZoneElement.addEventListener(type, (e) => {
                    dropZoneElement.classList.remove("drop-zone--over");
                });
            });

            dropZoneElement.addEventListener("drop", (e) => {
                e.preventDefault();

                if (e.dataTransfer.files.length) {
                    inputElement.files = e.dataTransfer.files;
                    updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
                }

                dropZoneElement.classList.remove("drop-zone--over");
            });
        });

        function updateThumbnail(dropZoneElement, file) {
            let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

            if (dropZoneElement.querySelector(".drop-zone__prompt")) {
                dropZoneElement.querySelector(".drop-zone__prompt").remove();
            }

            if (!thumbnailElement) {
                thumbnailElement = document.createElement("div");
                thumbnailElement.classList.add("drop-zone__thumb");
                dropZoneElement.appendChild(thumbnailElement);
            }

            thumbnailElement.dataset.label = file.name;

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onload = () => {
                    thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
                };
            } else {
                thumbnailElement.style.backgroundImage = null;
            }
        }
     });
  }
}
</script>
