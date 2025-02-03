<script setup lang="ts">

const props = defineProps({ alert: { type: Boolean, default: true } })
const emit = defineEmits(['update:alert']);
const close = () => {
    emit('update:alert', false);
};

</script>
<template>
    <q-dialog v-model="props.alert">
        <q-card>
            <q-card-section>
                <div class="text-h6">Informação</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <slot></slot>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" @click="close" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<style scoped></style>
