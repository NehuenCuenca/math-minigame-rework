<template>
    <button type="button" class="header__theme-toggler" @click="changeTheme">
      <i v-if="currentTheme === 'light'" class='bx bxs-moon bx-md'></i> 
      <i v-else class='bx bxs-sun bx-md'></i>
    </button>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';

    const htmlElement  = ref(document.querySelector("html"))
    const currentTheme = ref(document.querySelector("html").getAttribute("data-theme"))
    
    const changeTheme = () => {
        if(currentTheme.value === 'light'){
            htmlElement.value.setAttribute("data-theme", 'dark')
            currentTheme.value = 'dark'
        } else {
            htmlElement.value.setAttribute("data-theme", 'light')
            currentTheme.value = 'light'
        }  
    }

</script>

<style scoped>

</style>computed, computed, 