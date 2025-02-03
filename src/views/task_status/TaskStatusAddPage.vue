<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { ref } from 'vue';
import status_colors from '@/models/fixed/status_colors'
import status_color_fonts from '@/models/fixed/status_color_fonts'
import TaskStatus from '@/models/TaskStatus';
import TaskStatusService from '@/services/TaskStatusService';
import ModalDefault from '@/components/utils/modals/ModalDefault.vue';

const name = ref('')
const status_color = ref({ id: '', desc: '' })
const status_color_font = ref({ id: '', desc: '' })
const description = ref('')
const showInfo = ref(false)
const message = ref("")

const save = async () => {
    const taskStatus: TaskStatus = new TaskStatus(
        name.value,
        status_color.value.id,
        status_color_font.value.id,
        description.value
    );

    TaskStatusService.create(taskStatus).then((res) => {
        message.value = res.msg
        showInfo.value = true
    })
};
</script>

<template>
    <div class="flex flex-grow">
        <ModalDefault v-model:alert="showInfo">
            <span>{{ message }}</span>
        </ModalDefault>
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-lg">Adicionar Status das Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" @click="save()">
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
                                    :options="status_colors" option-value="id" option-label="desc"
                                    label="Cor do Status" />
                                <q-select class="bg-white rounded-default px-3" v-model="status_color_font"
                                    :options="status_color_fonts" option-value="id" option-label="desc"
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