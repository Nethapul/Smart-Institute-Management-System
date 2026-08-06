import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

// css
import '@/assets/css/remixicon.css'
import '@/assets/css/lib/bootstrap.min.css'
import '@/assets/css/lib/apexcharts.css'
import '@/assets/css/lib/dataTables.min.css'
import '@/assets/css/lib/flatpickr.min.css'
import '@/assets/css/lib/full-calendar.css'
import '@/assets/css/lib/calendar.css'
import '@/assets/css/style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
