import { createRouter, createWebHistory } from '@ionic/vue-router';

import FruitsPage from "@/views/FruitsPage";
import TabsPage from '@/views/TabsPage';
import SettingsPage from '@/views/SettingsPage';
import FavPage from '@/views/FavPage';
/* import DesPage from '@/views/store_category/Tab1.vue';
 */
const routes = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },

  {
    path: '/folder/Store_Category',
    component: TabsPage,

  },

  {
    path: '/folder/Store_Category/:name',
    component: () => import('../views/store_category/Tab1.vue')
  },
  {
    path: '/folder/FavPage',
    component: FavPage,
  },


  {
    path: '/folder/:id',
    component: () => import('../views/HomePage.vue')
  },


  {
    path: "/fruits",
    component: FruitsPage
  },
  {
    path: "/folder/Setting",
    component: SettingsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
