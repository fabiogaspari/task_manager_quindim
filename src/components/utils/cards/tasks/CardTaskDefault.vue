<script setup lang="ts">
import { ref } from 'vue';
import Task from '@/models/Task';
import BadgeDefault from '@/components/utils/badges/BadgeDefault.vue';
import DateUtil from '@/utils/DateUtil';

const selection = ref();

interface Props {
    clazz?: string;
    style?: string;
    btnonclick?: Function;
    disabled?: {
        type: boolean,
        default: false
    };
    task: Task
}

const props = defineProps<Props>();

function check() { }

</script>

<template>
    <div :class="`w-full px-4 py-2 rounded-default
           ${props.disabled ? 'bg-auxiliary-002' : ''} 
           ${props.clazz || 'bg-auxiliary-002'}`" :style="style" :disabled="props.disabled">
        <div class="flex items-center" style="flex-wrap: nowrap;">
            <div style="margin-left: -8px;">
                <q-checkbox v-model="selection" color="text-white" />
            </div>
            <div class="text-secondary-010 ubuntu-bold text-base">
                {{ task.title }}
            </div>
        </div>
        <div class="flex justify-between py-5">
            <BadgeDefault :clazz="task.status.bg_color + ' border-1 border-white ' + task.status.font_color">
                {{ task.status.name }}
            </BadgeDefault>
            <BadgeDefault clazz="bg-white text-black border-1 border-primary-008" v-if="task.expiration_date">
                <span>até&nbsp;</span>
                {{ DateUtil.formatDate(task.expiration_date) }}
            </BadgeDefault>
        </div>
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