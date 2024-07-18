<template>
    <div class="countdown-container">
        <span class="countdown-container__seconds">{{ seconds }}</span>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const emits = defineEmits(['countdownFinish'])
    const props = defineProps(['initialSeconds'])

    const seconds = ref(props.initialSeconds)

    onMounted(() => {
        const startInterval = setInterval(() => {
            seconds.value--
            // console.log(seconds.value);
            if(seconds.value === 0) stopInterval()
        }, 1000)

        const stopInterval = () => { 
            clearInterval(startInterval)
            emits('countdownFinish', true)
        }
    })
</script>

<style scoped>
.countdown-container{
    background-color: var(--color-details);
    padding: 3rem 6rem;
    border-radius: 50%;
}
.countdown-container__seconds{
    font: normal normal 400 clamp(10rem, 20vw, 12rem) var(--display-font);
    color: var(--dark-teal);
}
</style>