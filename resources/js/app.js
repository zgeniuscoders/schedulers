import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import Toaster from '@meforma/vue-toaster';
import root from "./pages/root.vue"


createApp({})
.component("root", root)
.use(Toaster)
.use(router)
.mount("#app")