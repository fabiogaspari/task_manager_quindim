import { defineStore } from 'pinia'

export const useRouteStore = defineStore('route', {
  state: () => ({
    currentRoute: '',
  }),
  actions: {
    setCurrentRoute(routeName: string) {
      this.currentRoute = routeName
    },
  },
})
