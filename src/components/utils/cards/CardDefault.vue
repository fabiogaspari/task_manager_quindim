<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from '@/components/models/Task';
import BadgeDefault from '@/components/utils/badges/BadgeDefault.vue';

const selection = ref();

interface Props {
    clazz?: string;
    style?: string;
    disabled?: {
        type: boolean,
        default: false
    };
}

const props = defineProps<Props>();

function check() { }

</script>

<template>
    <div :class="`w-full px-4 py-2 rounded-default
           ${props.disabled ? 'bg-auxiliary-002' : ''} 
           ${props.clazz || 'bg-auxiliary-002'}`" :style="style" :disabled="props.disabled">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.default-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 9px;
    gap: 10px;

    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
</style>