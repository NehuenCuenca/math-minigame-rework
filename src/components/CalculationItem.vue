<template>
    <li class="calculation-item">
        <span 
            class="calculation-item__text" 
            :class="isBeingResolved ? 'calculation-item__text_being-resolved' : ''"
        >
            {{ calculation.operation }}
        </span>
        <template v-if="!isBeingResolved && calculation.result != null">
            <i v-if="calculation.isResultCorrect" class='bx bx-check calculation-item__icon'></i>
            <i v-else class='bx bx-x calculation-item__icon'></i>
        </template>
    </li>
</template>

<script setup lang="ts">
    // const props = defineProps({
    defineProps({
        calculation: {
            type: Object,
            required: true,
            default: {
                operation: '',
                result: null,
                isResultCorrect: false
            }
        },
        isBeingResolved: {
            type: Boolean,
            // required: true,
            default: false
        },
        isResultCorrect: {
            type: Boolean,
            default: false
        },
    })
</script>

<style scoped>
.calculation-item{
    min-height: 50px;
    min-width: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.calculation-item__text{
    font: normal normal 400 clamp(1.4rem, 5vw, 1.5rem) var(--display-font);
    opacity: 0.6;
    color: var(--color-font);
}

.calculation-item__text_being-resolved{
    font: normal normal 400 2.5rem var(--display-font);
    opacity: 1;
}

.calculation-item__icon{
    font-size: 4rem;
    position: absolute;
}

.bx-check{
    color: green;
}
.bx-x{
    color: red;
}
</style>