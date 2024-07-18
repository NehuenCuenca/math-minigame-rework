<template>
    <div class="last-match-stats">
        <h2 class="last-match-stats__title">CalculosX{{ quantityCalculations }}</h2>

        <div class="row-stat row-stat_time-played">
            <h3 class="row-stat__title">Tiempo jugado</h3>
            <h4 class="row-stat__subtitle">{{ timePlayed }} segundos</h4>
        </div>

        <div class="row-stat row-stat_penalizations">
            <h3 class="row-stat__title">Penalizaciones</h3>
            <h4 class="row-stat__subtitle">{{ quantityErrors }} errores x {{ secondsPenalizationPerError }} seg. = {{ totalPenalization }} seg. </h4>
        </div>

        <div class="row-stat row-stat_total-time">
            <h3 class="row-stat__title">Tiempo total</h3>
            <h4 class="row-stat__subtitle">
                <span class="total-seconds">{{ timePlayedWithPenalization }}</span>
                segundos
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';

    const props = defineProps(['quantityCalculations', 'calculations', 'timePlayed'])

    const quantityErrors = ref(props.calculations.filter(({isResultCorrect}) => !isResultCorrect).length)
    const secondsPenalizationPerError = ref(2)
    const totalPenalization = ref(quantityErrors.value * secondsPenalizationPerError.value)
    const timePlayedWithPenalization = props.timePlayed + totalPenalization.value

</script>

<style scoped>
.last-match-stats{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.last-match-stats__title{
    font: normal normal 400 clamp(1.7rem, 5vw, 2rem) var(--display-font);
    color: var(--color-font);
    text-align: center;
}

.row-stat{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: .5rem; */
}
.row-stat__title{
    width: 100%;
    text-align: center;
    font: normal normal 400 clamp(2rem, 5vw, 2.2rem) var(--display-font);
    /* color: var(--color-font); */
}
.row-stat__subtitle{
    width: 100%;
    text-align: center;
    background-color: rgba(0,0,0, 0.1);
    font: normal normal 400 clamp(1.5rem, 5vw, 1.7rem) var(--default-font);
    color: var(--color-font);
}

.row-stat_time-played .row-stat__title,
.row-stat_penalizations .row-stat__title {
    color: var(--dark-teal);
}
.row-stat_time-played .row-stat__title {
    background-color: var(--sky-1);
}
.row-stat_penalizations .row-stat__title {
    background-color: var(--sky-2);
}
.row-stat_total-time .row-stat__title {
    background-color: var(--color-font);
    color: var(--color-bg);
}

.total-seconds{
    color: red;
}
</style> 