import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/auth/LoginPage.vue'
import TaskMainPage from '@/views/tasks/TaskMainPage.vue'
import TaskAddPage from '@/views/tasks/TaskAddPage.vue'
import TaskListPage from '@/views/tasks/TaskListPage.vue'
import TaskEditPage from '@/views/tasks/TaskEditPage.vue'
import TaskStatusMainPage from '@/views/task_status/TaskStatusMainPage.vue'
import TaskStatusAddPage from '@/views/task_status/TaskStatusAddPage.vue'
import TaskStatusListPage from '@/views/task_status/TaskStatusListPage.vue'
import TaskStatusEditPage from '@/views/task_status/TaskStatusEditPage.vue'
import RegisterPage from '@/views/auth/RegisterPage.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskMainPage,
      children: [
        {
          path: 'list',
          name: 'tasks.list',
          component: TaskListPage,
        },
        {
          path: 'create',
          name: 'tasks.create',
          component: TaskAddPage,
        },
        {
          path: 'edit/:id',
          name: 'tasks.edit',
          component: TaskEditPage,
        },
      ],
    },
    {
      path: '/task-status',
      name: 'task-status',
      component: TaskStatusMainPage,
      children: [
        {
          path: 'list',
          name: 'task-status.list',
          component: TaskStatusListPage,
        },
        {
          path: 'create',
          name: 'task-status.create',
          component: TaskStatusAddPage,
        },
        {
          path: 'edit/:id',
          name: 'task-status.edit',
          component: TaskStatusEditPage,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && (!authStore.isAuthenticated || authStore.isTokenExpired())) {
    router.push({ name: 'login' })
    next()
  } else {
    next()
  }
})

export default router
