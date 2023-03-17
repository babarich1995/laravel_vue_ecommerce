<template>
  <div
   v-if="notification.show"
    class="fixed  z-50 right-2 top-14 py-6 flex px-4 text-white rounded-lg shadow-sm animate-fade-in-down"
    :class="[notification.type === 'success' ? 'bg-emerald-500' : 'bg-red-500']"
  >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-white"
  v-if="notification.type === 'success'">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2 text-white"
v-else>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  
    {{ notification.message }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import {useNotifyStore} from "../store/notifyStore"
const store = useNotifyStore();
const notification = computed(() => store.notification);
</script>

<style></style>