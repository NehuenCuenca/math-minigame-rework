<template>
    <form @submit.prevent="handleSubmitResult" class="result-form">
        <input type="number" class="result-form__input" v-model="result" ref="resultFormInput">
        <button type="button" class="erase-button" @click="resetInput">
            <i class='bx bxs-eraser bx-md erase-button__icon'></i>
            <span class="erase-button__text">Borrar</span>
        </button>
    </form>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const emits = defineEmits(['submitResult'])

    const resultFormInput = ref(null)
    const result = ref('')

    onMounted(() => {
        resetInput()
    })

    const handleSubmitResult = () => { 
        emits('submitResult', Number(result.value))

        resetInput()
    }

    const resetInput = () => { 
        result.value = ''
        resultFormInput.value.focus()
    }
</script>

<style scoped>
.result-form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.result-form__input{
    border: none;
    border-radius: 20px;
    background-color: var(--color-details);
    font: normal normal 400 clamp(1.8rem, 5vw, 2rem) var(--display-font);
    width: min-content;
    padding: 1rem;
    min-width: 4rem;
    max-width: 8rem;
    outline: none;
    text-align: center;
}

.erase-button{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.erase-button__icon{
    color: var(--color-font-secondary);
}
.erase-button__text{
    font: normal normal 400 clamp(1.4rem, 5vw, 1.8rem) var(--display-font);
    color: var(--color-font-secondary);
}
</style>