<script setup lang="ts">
import CardDefault from '@/components/utils/cards/CardDefault.vue';
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { useTaskStatusStore } from "@/stores/taskStatusStore";
import TaskService from '@/services/TaskService';
import Task from '@/models/Task';
import { onMounted, ref } from 'vue';
import TaskStatus from '@/models/TaskStatus';
import { toRaw } from 'vue';
import ModalDefault from '@/components/utils/modals/ModalDefault.vue';

const taskStatusStore = useTaskStatusStore();
const title = ref<string>('');
const status = ref<TaskStatus | null>(null);
const expirationDate = ref<String | null>(null);
const listStatus = ref<TaskStatus[]>([]);
const showInfo = ref(false)
const message = ref("")

onMounted(() => {
    taskStatusStore.fetchTaskStatuses().then((res) => {
        listStatus.value = res
    })
});

const save = async () => {
    if (!status.value) {
        alert('Selecione um status para a tarefa.');
        return;
    }

    const statusValue = toRaw(status.value);

    const task: Task = new Task(
        title.value,
        statusValue,
        expirationDate.value ? expirationDate.value.split("/").join("-") : null
    );

    TaskService.create(task).then((res) => {
        message.value = res.msg
        showInfo.value = true
    })
};
</script>

<template>
    <ModalDefault v-model:alert="showInfo">
        <span>{{ message }}</span>
    </ModalDefault>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Adicionar Tarefas</span>
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