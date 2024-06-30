<script setup lang="ts">
import { ref } from 'vue';
import NavButtons from './components/NavButtons.vue'
import Tutorial from './components/Tutorial.vue'
import Game from './components/Game.vue'

  const userIsPlaying = ref(false)
  const userIsReadingTutorial = ref(false)

  const backToMenu = () => { 
    console.log('backToMenu');
    userIsPlaying.value = false
    userIsReadingTutorial.value = false
  }
  const restartGame = () => { 
    console.log('restartGame');
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
    <button type="button" class="header__theme-toggler"><i class='bx bxs-moon bx-md'></i> / <i class='bx bxs-sun bx-md'></i></button>
  </header>
  <main class="main-menu">

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

    <Game v-if="userIsPlaying" />
    
    <Tutorial v-if="userIsReadingTutorial" />
  </main>
  <footer class="footer">
    Desarrollado por <a href="https://www.linkedin.com/in/nehuen-cuenca/" target="_blank" rel="noopener noreferrer">Nehuen Cuenca</a>
  </footer>
</template>

<style>
.header{
  max-height: 20vh;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid var(--sky-2);
  flex-grow: 1;

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
  overflow-y: scroll;
  padding: 2rem 1rem;
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
  box-shadow: 2px 2px 12px 1px rgba(0, 0, 0, 0.7);
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
}

.bxs-info-circle{
  color: var(--color-font);
}
</style>