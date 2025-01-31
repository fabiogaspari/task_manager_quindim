<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import LinkDefault from '@/components/utils/forms/LinkDefault.vue';

const $q = useQuasar()

const email = ref(null)
const password = ref(null)

function onSubmit() {
    if (email.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
        })
    }
    else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        })
    }
};

function onReset() {
    email.value = null;
    password.value = null;
};


function teste(): void {
    return console.log('teste');
}

</script>

<template>
    <div class="flex justify-center items-center w-full h-full">
        <div class="items-center justify-center text-center">
            <div class="flex items-center justify-center text-center">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Gerenciador de Tarefas e
                    Usuários</span>
            </div>
            <div class="flex justify-center w-full">
                <img src="@/assets/gif-animado-mascote-quindim.gif" alt="Mascote Quindim" id="mascote" />
            </div>
            <div class="w-full">
                <q-form class="q-gutter-md">
                    <q-input class="bg-white rounded-default" v-model="email" type="text" filled label="Email"
                        lazy-rules />
                    <q-input class="bg-white rounded-default" v-model="password" type="password" filled label="Password"
                        lazy-rules />
                    <div class="flex justify-between items-end">
                        <LinkDefault href="https://www.google.com" class="md:text-xl text-sm">
                            <span>Esqueceu a senha?</span>
                        </LinkDefault>
                        <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" :btnonclick="teste">
                            <span class="ubuntu-bold text-auxiliary-main-008 md:text-xl text-sm w-20">Login</span>
                        </ButtonDefault>
                    </div>
                </q-form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>