import { createRouter, createWebHistory } from 'vue-router'
import OfficeQuickSearch from './components/OfficeQuickSearch/OfficeQuickSearch.vue'
import UnderConstruction from './components/UnderConstruction/UnderConstruction.vue'

const routes = [
  {
    path: '/',
    name: 'OfficeQuickSearch',
    component: OfficeQuickSearch
  },
  {
    path: '/in-progress',
    name: 'UnderConstruction',
    component: UnderConstruction
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
