import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from "./router";
import VueApexCharts from 'vue3-apexcharts';
import ApexCharts from 'apexcharts';



const app = createApp(App);
app.use(VueApexCharts);
app.use(router);
app.config.globalProperties.$apexcharts = ApexCharts;
app.mount('#app')