<script setup lang="ts">
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import { onMounted, ref } from 'vue';
import router from '@/router';
import ResponseUtil from '@/utils/ResponseUtil';
import CardTaskStatusDefault from '@/components/utils/cards/task_status/CardTaskStatusDefault.vue';
import type TaskStatus from '@/models/TaskStatus';
import TaskStatusService from '@/services/TaskStatusService';
import ConfirmDefaultModal from '@/components/utils/modals/ConfirmDefaultModal.vue';

const listTaskStatus = ref<TaskStatus[]>([]);
const taskStatus = ref<TaskStatus | null>(null)

const showConfirm = ref(false)
const dialogData = ref<{
    onConfirm?: () => void;
    onCancel?: () => void;
} | null>(null);

const showDialog = (): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
        dialogData.value = {
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false),
        };
    });
};

const confirmAction = async () => {
    const result = await showDialog();
    if (result) {
        TaskStatusService.delete(taskStatus.value?._id!).then((res) => {
            ResponseUtil.treatResponse(res)
            getAll()
        })
    }
    showConfirm.value = false
};

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

const remove: Function = async (received: TaskStatus) => {
    taskStatus.value = received
    showConfirm.value = true
    await confirmAction()
}
</script>

<template>
    <div class="flex flex-grow">
        <ConfirmDefaultModal v-if="dialogData" :on-confirm="dialogData.onConfirm" :on-cancel="dialogData.onCancel"
            :show="showConfirm">
            <span>Tem certeza que deseja excluir esse status de tarefa?</span>
        </ConfirmDefaultModal>
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