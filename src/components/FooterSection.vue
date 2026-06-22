<template>
  <footer class="border-t border-gray-200">
    <div class="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
      <span class="font-mono text-xs text-gray-400">
        © 2026 Lucas Silva de Oliveira
      </span>

      <div class="flex gap-5">
        <a
          v-for="link in links"
          :key="link.nome"
          :href="link.url"
          class="text-xs text-gray-400 hover:text-[#42b883] transition-colors"
        >
          {{ link.nome }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { nome: "GitHub", url: "https://github.com/lucsol1" },
//   { nome: "Scholar", url: "#" },
  { nome: "LinkedIn", url: "https://www.linkedin.com/in/lusgaoliveira/" }
]
</script>