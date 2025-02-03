<script setup lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore()

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
            <div class="flex justify-center" v-if="authStore.isAuthenticated">
                <img src="@/assets/logo_quindim.png" alt="Logo Quindim" id="logomarca" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
