<template>
  <header
    class="fixed top-0 left-0 right-0 z-50"
    style="border-bottom: 1px solid #e8e8e8; background: #fff;"
  >
    <div class="max-w-2xl mx-auto px-6 h-12 flex items-center justify-between">
      <button
        @click="navigate('home')"
        class="flex items-center gap-2 group"
      >
        <span
          class="font-['Inter'] text-sm font-medium text-foreground group-hover:opacity-70 transition-opacity"
        >
         <img
          :src="icon"
          alt="Lucas Silva de Oliveira"
          class="w-12 h-8 shrink-0"
        />
        </span>
      </button>

      <nav class="flex items-center gap-6">
        <button
          v-for="id in sections"
          :key="id"
          @click="navigate(id)"
          class="font-['Inter'] text-sm transition-colors"
          :style="{ color: current === id ? '#f97316' : '#888888' }"
        >
          {{ id === 'projects' ? 'Projetos' : 'Blog' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
type Section = "home" | "projects" | "blog";
import icon from "@/assets/home.svg";

defineProps<{
  current: Section;
}>();

const emit = defineEmits<{
  nav: [section: Section];
}>();

const sections: Section[] = ["projects", "blog"];

function navigate(section: Section) {
  emit("nav", section);
}
</script>