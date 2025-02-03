<script setup lang="ts">
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import TaskService from '@/services/TaskService';
import Task from '@/models/Task';
import { onMounted, ref } from 'vue';
import CardTaskDefault from '@/components/utils/cards/tasks/CardTaskDefault.vue';
import router from '@/router';
import ResponseUtil from '@/utils/ResponseUtil';

const listTasks = ref<Task[]>([]);

const getAll = async () => {
    TaskService.getAll().then((res) => {
        listTasks.value = res
    })
}

onMounted(() => {
    getAll()
});

const goto: Function = (page: String, id: string) => {
    router.push({ name: page.toString(), params: { id: id ?? null } })
};
const remove: Function = (task: Task) => {
    TaskService.delete(task._id!).then((res) => {
        ResponseUtil.treatResponse(res)
        getAll()
    })
};
</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm pb-20">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" @click="goto('tasks.create')">
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
                <template v-for="task in listTasks">
                    <CardTaskDefault :task="task">
                        <div class="flex justify-between">
                            <ButtonDefault @click="goto('tasks.edit', task._id)"
                                clazz="text-auxiliary-white-001 bg-secondary-009">
                                <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                            </ButtonDefault>
                            <ButtonDefault @click="remove(task)" clazz="text-auxiliary-white-001 bg-danger-006">
                                <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                            </ButtonDefault>
                        </div>
                    </CardTaskDefault>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped></style>