<script setup lang="ts">
  import { ref } from 'vue';
  import ThemeTogglerButton from './components/ThemeTogglerButton.vue'
  import NavButtons from './components/NavButtons.vue'
  import Tutorial from './components/Tutorial.vue'
  import Game from './components/Game.vue'

  const userIsPlaying = ref(false)
  const userIsReadingTutorial = ref(false)
  const showLoadingScreen = ref(false)

  const backToMenu = () => { 
    userIsPlaying.value = false
    userIsReadingTutorial.value = false
  }

  const restartGame = () => { 
    userIsPlaying.value = false
    showLoadingScreen.value = true
    
    setTimeout(() => {
      userIsPlaying.value = true
      showLoadingScreen.value = false
    }, 800);
  }

  const handleStartGame = () => { 
    userIsPlaying.value = true
  }
  const handleReadTutorial = () => { 
    userIsReadingTutorial.value = true
  }
</script>

<template>
  <header class="header">
    <h1 class="header__title">Mini-juego de Matemáticas</h1>
    <ThemeTogglerButton />
  </header>
  <main class="main-menu">

    <template v-if="showLoadingScreen">
      <div class="loading-screen">
        <i class='bx bx-loader-alt loading-screen__icon'></i>
        <h2 class="loading-screen__text">Cargando...</h2>
      </div>
    </template>
    <template v-else>
      <NavButtons 
        v-if="userIsPlaying || userIsReadingTutorial" 
        @handle-back-to-menu="backToMenu" 
        @handle-restart-game="restartGame"
        :userIsPlaying="userIsPlaying"
      />

      <div v-if="!userIsPlaying && !userIsReadingTutorial" class="menu-buttons">
        <button type="button" class="primary-button" @click="handleStartGame">
          <i class='bx bx-play bx-md'></i> 
          <span>Empezar juego</span>
        </button>
        <button type="button" class="terciary-button" @click="handleReadTutorial">
          <i class='bx bxs-info-circle bx-md'></i>
          <span>Leer tutorial</span>
        </button>
      </div>

      <Game v-if="userIsPlaying" :quantityCalculations="10"/>
      
      <Tutorial v-if="userIsReadingTutorial" />
    </template>
  </main>
  <footer class="footer">
    Desarrollado por <a href="https://www.linkedin.com/in/nehuen-cuenca/" target="_blank" rel="noopener noreferrer">Nehuen Cuenca</a>
  </footer>
</template>

<style>
.header{
  /* max-height: 20vh; */
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--sky-2);
  /* flex-grow: 1; */
}
.header__title{
  font: normal normal 400 clamp(2rem, 5vw, 2rem) var(--display-font);
  overflow-wrap: break-word;
  color: var(--color-font );
}
.header__theme-toggler{
  color: var(--color-font );
}

.main-menu{
  max-height: 70vh;
  overflow-y: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 5;
}
.menu-buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.primary-button,
.terciary-button{
  font: normal normal 400 clamp(1.8rem, 5vw, 2rem) var(--display-font);
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.primary-button{
  background-color: var(--color-font);
  color: var(--color-bg);
  padding: 1rem;
  /* box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.7); */
  box-shadow: var(--color-shadow);
}
.terciary-button{
  background-color: transparent;
  color: var(--color-font);
}

.footer{
  max-height: 10vh;
  font: normal normal 400 clamp(1.3rem, 5vw, 1.6rem) var(--display-font);
  text-align: center;
  padding: 1rem;
  flex-grow: 1;
  color: var(--color-font);
}

.bxs-info-circle{
  color: var(--color-font);
}
.bx-loader-alt{
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.loading-screen{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loading-screen__icon,
.loading-screen__text{
  color: var(--color-font);
}
.loading-screen__icon{
  font-size: 4rem;
}
.loading-screen__text{
  font: normal normal 700 clamp(2rem, 5vw, 2.2rem) var(--default-font);
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
</style>