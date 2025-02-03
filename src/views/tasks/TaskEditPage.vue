<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { useTaskStatusStore } from "@/stores/taskStatusStore";
import TaskService from '@/services/TaskService';
import Task from '@/models/Task';
import { onMounted, ref } from 'vue';
import TaskStatus from '@/models/TaskStatus';
import { toRaw } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id: string | string[] = route.params.id;
const taskStatusStore = useTaskStatusStore();
const listStatus = ref<TaskStatus[]>([]);
const task = ref<Task>()
const title = ref('')
const status = ref<TaskStatus | null>(null)
const expirationDate = ref<String | null>(null);

onMounted(async () => {
    try {
        listStatus.value = await taskStatusStore.fetchTaskStatuses()
        const response = await TaskService.get(id.toString())
        task.value = response

        if (task.value) {
            title.value = task.value.title
            status.value = task.value.status
            expirationDate.value ? expirationDate.value.split("/").join("-") : null
        }
    } catch (error) {
        console.error('Erro ao carregar tarefa:', error)
    }
});

const save = async () => {
    if (!status.value) {
        alert('Selecione um status para a tarefa.')
        return
    }

    try {
        const statusValue = toRaw(status.value)

        const updatedTask = new Task(
            title.value,
            statusValue,
            expirationDate.value ? expirationDate.value.split("/").join("-") : null
        )

        if (task.value?._id) {
            updatedTask._id = task.value._id
        }

        const response = await TaskService.update(id.toString(), updatedTask)
    } catch (error) {
        console.error('Erro ao salvar tarefa:', error)
    }
};
</script>

<template>
    <LoadingDefault :isLoading="taskStatusStore.isLoading"></LoadingDefault>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Editar Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" @click="save()">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-lg text-sm">Salvar</span>
                </ButtonDefault>
            </div>
            <div class="w-full bg-primary-001 p-4 rounded-default grid gap-y-4">
                <!-- ##################################################################################### -->
                <!-- ################################## COMENTARIO IMPORTANTE ############################ -->
                <!-- ##################################################################################### -->
                <!-- Se fossemos usar o quasar para criar o card, poderiamos criar o card dessa forma.  -->
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
                <!-- Porem, queremos algo mais customizado. -->
                <CardDefault>
                    <div>
                        <div class="w-full">
                            <q-form class="q-gutter-md">
                                <q-input class="bg-white rounded-default px-3" v-model="title" type="textarea"
                                    label="Título" />

                                <q-select class="bg-white rounded-default px-3" v-model="status" :options="listStatus"
                                    option-value="id" option-label="name" label="Status" />

                                <div class="flex flex-col text-center justify-center content-center">
                                    <label class="ubuntu-bold text-black">Data de Vencimento</label>
                                    <q-date v-model="expirationDate" minimal />
                                </div>
                            </q-form>
                        </div>
                    </div>
                </CardDefault>
            </div>
        </div>
    </div>
</template>

<style scoped></style>