<template>
  <div v-html="rendered" class="prose max-w-none" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps<{
  markdown: string;
}>();

const rendered = computed(() => marked(props.markdown));
</script>

<style scoped>
/* Optional styling for markdown content */
</style>
