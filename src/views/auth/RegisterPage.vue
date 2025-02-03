<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { onMounted, ref } from 'vue';

const name = ref(null)
const status = ref(null)
const password = ref(null)
const list_status = [
    'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

onMounted(() => {
    console.log('PEGAR A LISTA DE STATUS');
})

function teste(): void {
    return console.log('teste');
}

</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Registrar</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" :btnonclick="teste">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-lg text-sm">Salvar</span>
                </ButtonDefault>
            </div>
            <div class="w-full bg-primary-001 p-4 rounded-default grid gap-y-4">
                <CardDefault>
                    <div>
                        <div class="w-full">
                            <q-form class="q-gutter-md">
                                <q-input class="bg-white rounded-default px-3" v-model="name" type="textarea"
                                    label="Título" />
                                <q-select class="bg-white rounded-default px-3" v-model="status" :options="list_status"
                                    label="Status" />
                                <q-input class="bg-white rounded-default px-3" v-model="password" type="date"
                                    label="Data de Vencimento" />
                            </q-form>
                        </div>
                    </div>
                </CardDefault>
            </div>
        </div>
    </div>
</template>

<style scoped></style>