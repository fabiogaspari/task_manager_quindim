<script setup lang="ts">
const props = defineProps<{
    onConfirm?: () => void;
    onCancel?: () => void;
    show: boolean;
}>();
const emit = defineEmits(['update:confirm']);

const showDialog = () => {
    return new Promise<boolean>((resolve) => {
        const handleConfirm = () => {
            resolve(true);
        };

        const handleCancel = () => {
            resolve(false);
        };

        emit('update:confirm', { onConfirm: handleConfirm, onCancel: handleCancel });
    });
};


</script>
<template>
    <q-dialog v-model="props.show">
        <q-card>
            <q-card-section class="row items-center">
                <slot></slot>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Cancelar" color="primary" @click="onCancel?.()" />
                <q-btn flat label="Confimar" color="primary" @click="onConfirm?.()" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<style scoped></style>