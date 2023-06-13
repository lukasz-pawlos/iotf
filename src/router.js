import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWord from './components/HelloWorld';
import PulsePage from './components/PulsePage';
import SpO2Page from './components/SpO2Page';
import SettingsPage from './components/SettingsPage';


const routes = [
    { path: '/', component: HelloWord },
    { path: '/pulse', component: PulsePage },
    { path: '/spo2', component: SpO2Page },
    { path: '/settings', component: SettingsPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;