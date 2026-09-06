```vue
<template>
  <div class="max-w-2xl mx-auto p-4 text-justify text-foreground">
    <h1 class="text-2xl font-bold mb-4 text-left">Projetos</h1>

    <div v-for="item in projectItems" :key="item.id" class="mb-8">
      <h2 class="text-xl font-semibold mb-1 text-left">
        {{ item.description }}
      </h2>

      <p class="text-sm text-gray-500 mb-1 text-left">
        {{ item.date }}
      </p>

    

      <div class="flex flex-wrap gap-1.5 mb-2">
        <span
          v-for="tag in item.tags"
          :key="tag"
          class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded text-foreground"
          style="background:#f97316"
        >
          {{ tag }}
        </span>
      </div>

      <div
        v-if="extractKeywords(item.body || '').length"
        class="mb-2 text-justify"
      >
        <strong>Palavras-chave:</strong>

        <span
          v-for="kw in extractKeywords(item.body || '')"
          :key="kw"
          class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded"
          style="background:#f97316;color:white;margin-right:4px"
        >
          {{ kw }}
        </span>
      </div>

      <div class="text-justify">
        <MarkdownRenderer
          v-if="item.body"
          :markdown="item.body"
          class="mt-2 text-justify"
        />
      </div>

      <a
        v-if="item.link"
        :href="item.link"
        target="_blank"
        class="text-orange-600 hover:underline"
      >
        Acesse aqui
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { activities } from '@/content/composables/useActivities';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

const projectItems = computed(() =>
  activities.filter(a => a.source === 'project')
);

function extractKeywords(body: string): string[] {
  if (!body) return [];

  const match = body.match(/Palavras[--]chave:\s*(.*)/i);
  if (!match) return [];

  return (match[1] ?? '')
    .split(',')
    .map(k => k.trim())
    .filter(k => k);
}
</script>

<style scoped>
:deep(p),
:deep(li),
:deep(blockquote),
:deep(td),
:deep(th) {
  text-align: justify;
}
</style>
```
