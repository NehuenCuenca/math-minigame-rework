<template>
    <ul class="calculations-carousel">
        <CalculationItem 
            :calculation="calculations[currentCalculationIndex-1]" />
        <CalculationItem 
            :calculation="calculations[currentCalculationIndex]" 
            :isBeingResolved="true"
            class="current-calculation">
            <!-- <p>¿Cuanto es?</p> -->
        </CalculationItem>
        <CalculationItem :calculation="calculations[currentCalculationIndex+1]" />
    </ul>
</template>

<script setup lang="ts">
    import CalculationItem from "../components/CalculationItem.vue";

    defineProps({
        calculations: {
            type: Array,
            required: true,
        },
        currentCalculationIndex: {
            type: Number,
            required: true,
        }
    })
</script>

<style scoped>
.calculations-carousel {
    background: transparent;
    overflow: hidden;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
}

.calculations-carousel::before, .calculations-carousel::after {
    background: linear-gradient(to right, var(--color-details) 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100%;
    position: absolute;
    width: 100px;
    width: clamp(100px, 40vw, 350px);
    z-index: 2;
}

.calculations-carousel::after {
    right: 0;
    top: 0;
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
}

.calculations-carousel::before {
    left: 0;
    top: 0;
}


/* .current-calculation{
    background-color: brown;
} */

</style>