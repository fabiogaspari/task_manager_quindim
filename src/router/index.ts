import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/pages/auth/LoginPage.vue'
import TaskMainPage from '@/components/pages/tasks/TaskMainPage.vue'
import TaskAddPage from '@/components/pages/tasks/TaskAddPage.vue'
import TaskListPage from '@/components/pages/tasks/TaskListPage.vue'
import TaskEditPage from '@/components/pages/tasks/TaskEditPage.vue'
import TaskStatusMainPage from '@/components/pages/task_status/TaskStatusMainPage.vue'
import TaskStatusAddPage from '@/components/pages/task_status/TaskStatusAddPage.vue'
import TaskStatusListPage from '@/components/pages/task_status/TaskStatusListPage.vue'
import TaskStatusEditPage from '@/components/pages/task_status/TaskStatusEditPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
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

export default router
