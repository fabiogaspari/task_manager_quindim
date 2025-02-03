<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { onMounted, ref } from 'vue';
import ResponseUtil from '@/utils/ResponseUtil';
import status_colors from '@/models/fixed/status_colors'
import status_color_fonts from '@/models/fixed/status_color_fonts'
import TaskStatusService from '@/services/TaskStatusService';
import { useRoute } from 'vue-router';
import TaskStatus from '@/models/TaskStatus';

const route = useRoute();
const id: string | string[] = route.params.id;
const status = ref<TaskStatus>()
const name = ref('')
const status_color = ref({ id: '', desc: '' })
const status_color_font = ref({ id: '', desc: '' })
const description = ref('')

onMounted(async () => {
    try {
        const response = await TaskStatusService.get(id.toString())
        status.value = response

        const scf = status_color_fonts.find((scf) => scf.id == status.value?.status_color_font) ?? status_color_fonts[0]
        const sc = status_colors.find((sc) => sc.id == status.value?.status_color) ?? status_colors[0]

        if (status.value) {
            name.value = status.value.name
            status_color.value = sc
            status_color_font.value = scf
            description.value = status.value.description
        }
    } catch (error) {
        console.error('Erro ao carregar tarefa:', error)
    }
});

const save = async () => {
    try {
        const updatedTask = new TaskStatus(
            name.value,
            status_color.value.id,
            status_color_font.value.id,
            description.value
        )

        if (status.value?._id) {
            updatedTask._id = status.value._id
        }

        const response = await TaskStatusService.update(id.toString(), updatedTask)


    } catch (error) {
        console.error('Erro ao salvar o status da tarefa:', error)
    }
};
</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-lg">Editar Status das Tarefas</span>
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