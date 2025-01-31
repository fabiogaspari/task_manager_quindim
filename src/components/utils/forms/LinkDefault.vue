<script setup lang="ts">
interface Props {
    href: string;
    clazz?: string;
    style?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
}

// Define as props
const props = defineProps<Props>();
</script>

<template>
    <a :href="props.href" :class="`text-auxiliary-002 hover:text-auxiliary-005 underline transition duration-200 ubuntu-bold text-lg
             ${props.clazz || ''}`" :style="props.style" :target="props.target">
        <slot></slot>
    </a>
</template>