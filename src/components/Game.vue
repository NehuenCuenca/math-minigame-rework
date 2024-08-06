<template>
    <section class="game-container">
        <Countdown v-if="!hasGameBegan" 
            :initialSeconds="3" 
            @countdown-finish="startGame"
        />
        
        <template v-if="hasGameBegan && !hasGameFinish">
            <Timer :finish="timerStopFlag" @timer-stop="handleTimer"/>
            <CalculationsCarousel 
            :calculations="calculations" 
            :currentCalculationIndex="currentCalculationIndex"
            />
            <ResultInput @submit-result="handleResult"/>
        </template>

        <LastMatchStats v-if="hasGameBegan && hasGameFinish" 
            :quantityCalculations="quantityCalculations"
            :calculations="calculations"
            :timePlayed="timePlayed"
        />
    </section>  
</template>

<script setup lang="ts">
    import Countdown from '../components/Countdown.vue'
    import Timer from '../components/Timer.vue'
    import CalculationsCarousel from '../components/CalculationsCarousel.vue'
    import ResultInput from '../components/ResultInput.vue'
    import LastMatchStats from '../components/LastMatchStats.vue'
    import { ref } from 'vue';
    import { generateCalculations } from "../helpers/MathCalculations";

    const props = defineProps(['quantityCalculations'])

    const hasGameBegan  = ref(false)
    const hasGameFinish = ref(false)
    const timerStopFlag = ref(false)
    const calculations  = ref([])
    const currentCalculationIndex = ref(0)
    const timePlayed = ref(0)


    const startGame = (bool) => { 
        hasGameBegan.value = bool

        calculations.value = generateCalculations(props.quantityCalculations)
                                .map((currentCalculation) => ({
                                    operation: currentCalculation,
                                    result: null,
                                    isResultCorrect: false 
                                }))

        /* setTimeout(() => {
            hasGameFinish.value = true
        }, 4000) */
    }

    const handleTimer = ({ seconds }) => { 
        timePlayed.value = seconds
        finishGame()
    }

    const handleResult = (result) => { 
        const lastResolved = calculations.value[currentCalculationIndex.value]
        lastResolved.result = result
        lastResolved.isResultCorrect = eval(lastResolved.operation) === lastResolved.result

        const playerResolveLastCalculation = currentCalculationIndex.value === calculations.value.length-1
        if( playerResolveLastCalculation ) {
            timerStopFlag.value = true
            return
        } 

        currentCalculationIndex.value++
    }

    const finishGame = () => { 
        hasGameFinish.value = true
    }
</script>

<style scoped>
.game-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
</style>