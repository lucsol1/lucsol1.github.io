<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Blog</h1>
    <div v-for="item in blogItems" :key="item.id" class="mb-8">
      <h2 class="text-xl font-semibold mb-1">{{ item.title }}</h2>
      <p class="text-sm text-gray-500 mb-1">{{ item.date }}</p>
      <p class="text-base mb-2">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { activities } from '@/content/composables/useActivities';

// Blog items are activities with source 'blog'
const blogItems = computed(() =>
  activities.filter(a => a.source === 'blog')
);
</script>

<style scoped>
/* Page‑specific styles */
</style>
