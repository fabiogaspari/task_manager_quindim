<script setup lang="ts">
interface Props {
    clazz?: string;
    style?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="ubuntu-bold text-sm">
        <span :class="'inline-flex items-center px-3 py-1 text-sm rounded-default ' + clazz">
            <slot></slot>
        </span>
    </div>
</template>

<style scoped></style>