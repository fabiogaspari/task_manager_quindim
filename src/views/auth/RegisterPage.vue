<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import LinkDefault from '@/components/utils/forms/LinkDefault.vue';
import User from '@/models/User';
import UserService from '@/services/UserService';
import ResponseUtil from '@/utils/ResponseUtil';
import router from '@/router';

const $q = useQuasar()

const username = ref("")
const email = ref("")
const password = ref("")

const save = async () => {
    const user: User = new User(
        username.value,
        email.value,
        password.value
    );

    const response = await UserService.create(user);
    router.push({ name: "login" })

};

</script>

<template>
    <div class="flex justify-center items-center w-full h-full">
        <div class="items-center justify-center text-center">
            <div class="flex items-center justify-center text-center">
                <div class="q-gutter-md flex flex-col">
                    <span class="text-white ubuntu-bold md:text-5xl text-2xl">Registrar</span>
                    <span class="text-white ubuntu-bold md:text-3xl text-xl">Gerenciador de Tarefas e
                        Usuários</span>
                </div>
            </div>
            <div class="flex justify-center w-full">
                <img src="@/assets/gif-animado-mascote-quindim.gif" alt="Mascote Quindim" id="mascote" />
            </div>
            <div class="w-full">
                <div class="q-gutter-md">
                    <q-input class="bg-white rounded-default" v-model="username" type="text" filled label="Username" />
                    <q-input class="bg-white rounded-default" v-model="email" type="text" filled label="Email" />
                    <q-input class="bg-white rounded-default" v-model="password" type="password" filled
                        label="Password" />
                    <div class="flex justify-between items-end">
                        <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" @click="save()">
                            <span class="ubuntu-bold text-auxiliary-main-008 md:text-xl text-sm w-">Registrar</span>
                        </ButtonDefault>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>