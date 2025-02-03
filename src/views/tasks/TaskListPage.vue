<script setup lang="ts">
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import TaskService from '@/services/TaskService';
import Task from '@/models/Task';
import { onMounted, ref } from 'vue';
import CardTaskDefault from '@/components/utils/cards/tasks/CardTaskDefault.vue';
import router from '@/router';
import ResponseUtil from '@/utils/ResponseUtil';
import ConfirmDefaultModal from '@/components/utils/modals/ConfirmDefaultModal.vue';

const listTasks = ref<Task[]>([]);
const task = ref<Task | null>(null)

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
        TaskService.delete(task.value?._id!).then((res) => {
            ResponseUtil.treatResponse(res)
            getAll()
        })
    }
    showConfirm.value = false
};

const getAll = async () => {
    TaskService.getAll().then((res) => {
        listTasks.value = res
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

const remove: Function = async (received: Task) => {
    task.value = received
    showConfirm.value = true
    await confirmAction()
}
</script>

<template>
    <div class="flex flex-grow">
        <ConfirmDefaultModal v-if="dialogData" :on-confirm="dialogData.onConfirm" :on-cancel="dialogData.onCancel"
            :show="showConfirm">
            <span>Tem certeza que deseja excluir essa tarefa?</span>
        </ConfirmDefaultModal>
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