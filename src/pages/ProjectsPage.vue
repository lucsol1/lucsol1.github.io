<template>
  <div class="max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Projetos</h1>
    <div v-for="item in projectItems" :key="item.id" class="mb-8">
      <h2 class="text-xl font-semibold mb-1">{{ item.title }}</h2>
      <p class="text-sm text-gray-500 mb-1">{{ item.date }}</p>
      <p class="text-base mb-2">{{ item.description }}</p>
      <div class="flex flex-wrap gap-1.5 mb-2">
        <span v-for="tag in item.tags" :key="tag" class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded" style="background:#f97316;color:#888">{{ tag }}</span>
      </div>

      <div v-if="extractKeywords(item.body).length" class="mb-2">
        <strong>Palavras‑chave:</strong>
        <span v-for="kw in extractKeywords(item.body)" :key="kw" class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded" style="background:#f97316;color:white;margin-right:4px">{{ kw }}</span>
      </div>
      <MarkdownRenderer v-if="item.body" :markdown="item.body" class="mt-2" />
      <a v-if="item.link" :href="item.link" target="_blank" class="text-orange-600 hover:underline">Acesse aqui</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { activities } from '@/content/composables/useActivities';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

// Project items are activities with source 'project'
const projectItems = computed(() =>
  activities.filter(a => a.source === 'project')
);

// Extract keywords from markdown body
function extractKeywords(body: string): string[] {
  if (!body) return [];
  const match = body.match(/Palavras[‑-]chave:\s*(.*)/i);
  if (!match) return [];
  return match[1]
    .split(',')
    .map(k => k.trim())
    .filter(k => k);
}
</script>

<style scoped>
/* Page‑specific styles */
</style>
