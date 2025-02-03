<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { ref } from 'vue';

const name = ref(null)
const status_color = ref(null)
const description = ref(null)
const list_status_color = [
    {
        desc: 'verde',
        id: 'bg-tertiary-00'
    },
    {
        desc: 'amarelo',
        id: 'bg-primary-002'
    },
    {
        desc: 'vermelho',
        id: 'bg-danger-003'
    },
    {
        desc: 'cinza',
        id: 'bg-auxiliary-005'
    },
    {
        desc: 'preto',
        id: 'bg-black'
    }
]
const status_color_font = ref(null)
const list_status_color_font = [
    {
        desc: 'verde',
        id: 'text-tertiary-00'
    },
    {
        desc: 'amarelo',
        id: 'text-primary-002'
    },
    {
        desc: 'vermelho',
        id: 'text-danger-003'
    },
    {
        desc: 'cinza',
        id: 'text-auxiliary-005'
    },
    {
        desc: 'preto',
        id: 'text-black'
    }
]

function teste(): void {
    return console.log('teste');
}

</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-lg">Adicionar Status das Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" :btnonclick="teste">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-lg text-sm">Salvar</span>
                </ButtonDefault>
            </div>
            <div class="w-full bg-primary-001 p-4 rounded-default grid gap-y-4">
                <!-- ##################################################################################### -->
                <!-- ################################## COMENTARIO IMPORTANTE ############################ -->
                <!-- ##################################################################################### -->

                <!-- Se fossemos usar o quasar para criar o card, poderiamos criar o card dessa forma. Porem, queremos algo mais customizado. -->
                <!-- <q-card class="my-card bg-secondary text-white">
                    <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>

                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>

                    <q-separator dark />

                    <q-card-actions>
                        <q-btn flat>Action 1</q-btn>
                        <q-btn flat>Action 2</q-btn>
                    </q-card-actions>
                </q-card> -->
                <CardDefault>
                    <div>
                        <div class="w-full">
                            <q-form class="q-gutter-md">
                                <q-input class="bg-white rounded-default px-3" v-model="name" type="text"
                                    label="Nome" />
                                <q-select class="bg-white rounded-default px-3" v-model="status_color"
                                    :options="list_status_color" option-value="id" option-label="desc"
                                    label="Cor do Status" />
                                <q-select class="bg-white rounded-default px-3" v-model="status_color_font"
                                    :options="list_status_color_font" option-value="id" option-label="desc"
                                    label="Cor da Fonte" />
                                <q-input class="bg-white rounded-default px-3" v-model="description" type="textarea"
                                    label="Descrição" />
                            </q-form>
                        </div>
                    </div>
                </CardDefault>
            </div>
        </div>
    </div>
</template>

<style scoped></style>