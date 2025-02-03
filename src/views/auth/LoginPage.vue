<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import LinkDefault from '@/components/utils/forms/LinkDefault.vue';
import { useAuthStore } from "@/stores/authStore";
import router from '@/router';

const $q = useQuasar()
const authStore = useAuthStore();

const email = ref("")
const password = ref("")
const errorMessage = ref("");

const login = async () => {
    try {
        const response = await authStore.login({ email: email.value, password: password.value });
        if (response) {
            router.push({ name: 'tasks.list' })
        }
    } catch (error) {
        errorMessage.value = "Falha no login. Verifique suas credenciais.";
    }
};

</script>

<template>
    <div class="flex justify-center items-center w-full h-full">
        <div class="items-center justify-center text-center">
            <div class="flex items-center justify-center text-center">
                <div class="q-gutter-md flex flex-col">
                    <span class="text-white ubuntu-bold md:text-5xl text-2xl">Login</span>
                    <span class="text-white ubuntu-bold md:text-3xl text-xl">Gerenciador de Tarefas e
                        Usuários</span>
                </div>
            </div>
            <div class="flex justify-center w-full">
                <img src="@/assets/gif-animado-mascote-quindim.gif" alt="Mascote Quindim" id="mascote" />
            </div>
            <div class="w-full">
                <div class="q-gutter-md">
                    <q-input class="bg-white rounded-default" v-model="email" type="text" filled label="Email"
                        lazy-rules />
                    <q-input class="bg-white rounded-default" v-model="password" type="password" filled label="Password"
                        lazy-rules />
                    <div class="flex justify-between items-end">
                        <LinkDefault href="https://www.google.com" class="md:text-xl text-sm">
                            <span>Esqueceu a senha?</span>
                        </LinkDefault>
                        <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" @click="login()">
                            <span class="ubuntu-bold text-auxiliary-main-008 md:text-xl text-sm w-20">Login</span>
                        </ButtonDefault>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>