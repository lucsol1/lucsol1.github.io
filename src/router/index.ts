import { createRouter, createWebHistory } from 'vue-router'
import ProjectsPage from '@/pages/ProjectsPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectsPage },
    { path: '/blog', name: 'Blog', component: BlogPage }
  ],
})

export default router
