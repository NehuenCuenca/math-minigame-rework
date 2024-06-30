<template>
    <div class="nav-buttons">
      <button type="button" class="back-to-menu-button terciary-button" @click="() => $emit('handleBackToMenu')">
        <i class='bx bx-arrow-back bx-sm'></i>
        <span>Volver al menú</span>
      </button>
      <button type="button" class="restart-button primary-button" @click="() => $emit('handleRestartGame')" v-if="props.userIsPlaying">
        <i class='bx bx-revision bx-sm'></i>
        <span>Reiniciar</span>
      </button>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['handleBackToMenu', 'handleRestartGame'])
const props = defineProps(['userIsPlaying'])
</script>

<style scoped>
.nav-buttons{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}


.restart-button,
.back-to-menu-button{
  font: normal normal 400 clamp(1.3rem, 5vw, 5rem) var(--display-font);
}
.back-to-menu-button{
    color: var(--color-font);
}
.restart-button{
    text-wrap: balance;
}
</style>