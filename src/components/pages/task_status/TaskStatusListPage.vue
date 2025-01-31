<script setup lang="ts">
import ButtonDefault from '@/components/utils/forms/ButtonDefault.vue';
import CardTaskDefault from '@/components/utils/cards/tasks/CardTaskDefault.vue';
import CardTaskStatusDefault from '@/components/utils/cards/task_status/CardTaskStatusDefault.vue';

function teste(): void {
    return console.log('teste');
}

</script>

<template>
    <div class="flex flex-grow">
        <div class="flex justify-center content-start w-full h-full q-gutter-sm pb-20">
            <div class="flex justify-between w-full">
                <span class="text-white ubuntu-bold md:text-5xl text-xl">Status das Tarefas</span>
                <ButtonDefault clazz="bg-tertiary-003 hover:bg-tertiary-005 ubuntu-bold" :btnonclick="teste">
                    <span class="ubuntu-bold text-auxiliary-main-008 md:text-lg text-sm">Adicionar</span>
                </ButtonDefault>
            </div>
            <div class="w-full h-full bg-primary-001 p-4 rounded-default grid gap-y-4">
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

                <CardTaskStatusDefault
                    :status="{ id: 1, name: 'teste', description: 'teste', bg_color: 'bg-auxiliary-005', font_color: 'text-white' }">
                    <div class="flex justify-between">
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-secondary-009">
                            <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                        </ButtonDefault>
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-danger-006">
                            <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                        </ButtonDefault>
                    </div>
                </CardTaskStatusDefault>
                <CardTaskStatusDefault
                    :status="{ id: 1, name: 'teste', description: 'teste', bg_color: 'bg-danger-005', font_color: 'text-white' }">
                    <div class="flex justify-between">
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-secondary-009">
                            <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                        </ButtonDefault>
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-danger-006">
                            <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                        </ButtonDefault>
                    </div>
                </CardTaskStatusDefault>
                <CardTaskStatusDefault
                    :status="{ id: 1, name: 'teste', description: 'teste', bg_color: 'bg-tertiary-005', font_color: 'text-black' }">
                    <div class="flex justify-between">
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-secondary-009">
                            <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                        </ButtonDefault>
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-danger-006">
                            <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                        </ButtonDefault>
                    </div>
                </CardTaskStatusDefault>
                <CardTaskStatusDefault
                    :status="{ id: 1, name: 'teste', description: 'teste', bg_color: 'bg-tertiary-005', font_color: 'text-black' }">
                    <div class="flex justify-between">
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-secondary-009">
                            <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                        </ButtonDefault>
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-danger-006">
                            <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                        </ButtonDefault>
                    </div>
                </CardTaskStatusDefault>
                <CardTaskStatusDefault
                    :status="{ id: 1, name: 'teste', description: 'teste', bg_color: 'bg-tertiary-005', font_color: 'text-black' }">
                    <div class="flex justify-between">
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-secondary-009">
                            <span class="ubuntu-bold md:text-xl text-sm w-20">Editar</span>
                        </ButtonDefault>
                        <ButtonDefault :btnonclick="teste" clazz="text-auxiliary-white-001 bg-danger-006">
                            <span class="ubuntu-bold  md:text-xl text-sm w-20">Excluir</span>
                        </ButtonDefault>
                    </div>
                </CardTaskStatusDefault>
            </div>
        </div>
    </div>
</template>

<style scoped></style>