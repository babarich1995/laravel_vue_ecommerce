<template>
 <div class="min-h-full">
    <NavBar @toggle-sidebar="toggleSidebar"/>
  
    <sidenav :class="{'-ml-[250px]': !sidebarOpened}"/>
      
      <main class="p-6 ml-0 lg:ml-64 xl:ml-64 xxl:ml-64">
        <router-view></router-view>
         
      </main>

    
  
   
  </div>

   
  </template>
  
  <script setup>
  import {ref, onMounted, onUnmounted} from 'vue'
  import  NavBar from '../components/Navbar.vue'
  import Sidenav from '../components/sidebar/index.vue'

const {title} = defineProps({
  title: String
})
const root = ref(null)
const sidebarOpened = ref(false); 

  function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value  
}


function updateSidebarState() {
  sidebarOpened.value = window.outerWidth >= 1024;
}
onMounted(() => {
  updateSidebarState();
  window.addEventListener('resize', updateSidebarState)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateSidebarState)
 

})
   
  
  </script>
  <style scoped>
   
  </style>