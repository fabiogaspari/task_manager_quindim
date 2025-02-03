<script setup lang="ts">
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import TaskService from '@/services/TaskService';
import Task from '@/models/Task';
import { onMounted, ref } from 'vue';
import CardTaskDefault from '@/components/utils/cards/tasks/CardTaskDefault.vue';
import router from '@/router';
import ResponseUtil from '@/utils/ResponseUtil';
import CardTaskStatusDefault from '@/components/utils/cards/task_status/CardTaskStatusDefault.vue';
import type TaskStatus from '@/models/TaskStatus';
import TaskStatusService from '@/services/TaskStatusService';

const listTaskStatus = ref<TaskStatus[]>([]);

const getAll = async () => {
    TaskStatusService.getAll().then((res) => {
        listTaskStatus.value = res
    })
}

onMounted(() => {
    getAll()
});

const goto: Function = (page: String, id: string) => {
    if (id) {
        router.push({ name: page.toString(), params: { id: id ?? null } })
        return
    }
    router.push({ name: page.toString() })
};
const remove: Function = (taskStatus: TaskStatus) => {
    TaskStatusService.delete(taskStatus._id!).then((res) => {
        ResponseUtil.treatResponse(res)
        getAll()
    })
};
</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm pb-20">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Status das Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold"
                    @click="goto('task-status.create')">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-lg text-sm">Adicionar</span>
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

                <template v-for="taskStatus in listTaskStatus">
                    <CardTaskStatusDefault :status="taskStatus">
                        <div class="flex justify-between">
                            <ButtonDefault @click="goto('task-status.edit', taskStatus._id)"
                                clazz="text-auxiliary-white-001 bg-secondary-009">
                                <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                            </ButtonDefault>
                            <ButtonDefault @click="remove(taskStatus)" clazz="text-auxiliary-white-001 bg-danger-006">
                                <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                            </ButtonDefault>
                        </div>
                    </CardTaskStatusDefault>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>