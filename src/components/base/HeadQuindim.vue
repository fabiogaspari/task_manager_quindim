<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/authStore";
import ButtonDefault from "../utils/forms/ButtonDefault.vue";
import { useRouteStore } from "@/stores/routeStore";

const authStore = useAuthStore()
const routeStore = useRouteStore()

</script>
<template>

    <div class="w-screen bg-white p-4 md:py-4 md:px-10 top-0 left-0">
        <div class="flex justify-between" v-if="authStore.isAuthenticated">
            <img src="@/assets/logo_quindim.png" alt="Logo Quindim" id="logomarca" />
            <q-btn color="primary" label="Menu" style="background: #28606d;">
                <q-menu>
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup>
                            <q-item-section @click="router.push({ name: 'tasks.list' })">Tarefas</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section @click="router.push({ name: 'task-status.list' })">Status de
                                Tarefa</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section @click.prevent="authStore.logout()">Logout</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
        </div>
        <div class="flex justify-between" v-else>
            <img src="@/assets/logo_quindim.png" alt="Logo Quindim" id="logomarca" />
            <div v-if="routeStore.currentRoute == 'register'">
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold"
                    @click="router.push({ name: 'login' })">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-xl text-sm w-20">Login</span>
                </ButtonDefault>
            </div>
            <div v-else-if="routeStore.currentRoute == 'login'">
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold"
                    @click="router.push({ name: 'register' })">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-xl text-sm w-30">Registrar-se</span>
                </ButtonDefault>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
