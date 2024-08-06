<template>
    <span class="timer-seconds">{{ seconds }}''</span>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';

    const emits = defineEmits(['timerStop'])

    const props = defineProps({
        finish: {
            type: Boolean,
            default: false
        },
    })

    const interval = ref(0)
    const seconds = ref(0)

    const stopInterval = () => { 
        clearInterval(interval.value)
        interval.value = 0
        emits('timerStop', {seconds: seconds.value})
    }

    onMounted(() => {
        const intervalId = setInterval(() => {
            seconds.value++
        }, 1000)

        interval.value = intervalId
    })

    watch(() => props.finish, () => {
        stopInterval()
    })
</script>

<style scoped>
.timer-seconds{
    font: normal normal 400 clamp(2rem, 5vw, 2.5rem) var(--display-font);
    color: var(--color-font);
}
</style>