<script setup lang="ts"></script>

<template>
  <header class="header">
    <h1 class="header__title">Mini-juego de Matemáticas</h1>
    <button type="button" class="header__theme-toggler">🌑/☀</button>
  </header>
  <main class="main-menu">
    <div class="menu-buttons">
      <button type="button" class="primary-button">Empezar juego</button>
      <button type="button" class="terciary-button">Leer tutorial</button>
    </div>
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
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.primary-button{
  background-color: var(--color-font);
  color: var(--color-bg);
  padding: .5rem 1rem;
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
}
</style>