<script setup lang="ts">
import HeadQuindim from '@/components/base/HeadQuindim.vue';
import FooterQuindim from '@/components/base/FooterQuindim.vue';
import BodyQuindim from '@/components/base/BodyQuindim.vue';
import ModalDefault from './components/utils/modals/ModalDefault.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen justify-between overflow-x-hidden">
        <HeadQuindim></HeadQuindim>

        <BodyQuindim>
            <router-view />
        </BodyQuindim>

        <FooterQuindim></FooterQuindim>
    </div>
</template>

<style scoped></style>
