<template>

</template>

<script setup>
import { useQuasar } from 'quasar'
import { onUpdated } from 'vue'

const $q = useQuasar()
const props = defineProps(["isLoading"])

onUpdated(() => {
    if (props.isLoading) {
        $q.loading.show({
            message: 'Por favor, aguarde um momento. Estamos trazendo as informações.'
        })
    } else {
        $q.loading.hide()
    }
})

</script>