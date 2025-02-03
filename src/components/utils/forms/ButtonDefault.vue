<script setup lang="ts">
interface Props {
    clazz?: string;
    style?: string;
    onClick: Function;
    disabled?: boolean;
}

const props = defineProps<Props>();

function execClick() {
    props.onClick();
}
</script>

<template>
    <button :class="`inline-flex items-center justify-center px-4 py-2 rounded-default font-medium transition duration-200 default-button
           ${props.disabled ? 'bg-auxiliary-002 cursor-not-allowed' : 'cursor-pointer'} 
           ${props.clazz || 'bg-secondary-009 hover:bg-secondary-010'}`" :style="style" @click="execClick"
        :disabled="props.disabled">
        <slot></slot>
    </button>
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