<template>
    <section class="tutorial-container">
        <h2 class="tutorial-container__title">Tutorial</h2>
        <p class="tutorial-container__text">El juego consiste en resolver 10 cuentas aleatorias (hay cuentas de multiplicación, resta y suma) en el menor tiempo posible.</p>
        <video width="200" height="300" controls class="tutorial-container__video">
            <source src="../assets/tutorial.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.tutorial-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tutorial-container__title,
.tutorial-container__text{
    color: var(--color-font);
}
.tutorial-container__title{
    font: normal normal 400 clamp(2rem, 5vw, 2.4rem) var(--display-font);
    text-decoration: underline;
}
.tutorial-container__text{
    max-width: clamp(20rem, 50vw, 40rem);
    padding: 1rem ;
    font: normal normal 400 clamp(1.5rem, 5vw, 1.7rem) var(--default-font);
    text-align: justify;
}
.tutorial-container__video{
    border-radius: 5px;
}
</style>