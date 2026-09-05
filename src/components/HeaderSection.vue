<template>
  <header
    :class="['fixed top-0 left-0 right-0 z-50', isDark ? 'bg-black text-white' : 'bg-white text-black']"
    style="border-bottom: 1px solid #e8e8e8;"
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
        <button @click="toggleTheme" :class="['ml-4 p-1 rounded', isDark ? 'text-white' : 'text-black']" title="Toggle theme">
          <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 4.354a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM12 15a3 3 0 100-6 3 3 0 000 6zM4.222 5.636a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L4.222 7.05a1 1 0 010-1.414zM17.95 17.95a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 010-1.414zM4 12a1 1 0 011-1h2a1 1 0 010 2H5a1 1 0 01-1-1zM15 12a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM7.05 17.95a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 1.414L8.464 17.95a1 1 0 01-1.414 0zM17.536 7.464a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 1.414L18.95 7.464a1 1 0 01-1.414 0z"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>
        </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

// Define possible sections
type Section = "home" | "projects" | "blog";

// Reactive flag for dark mode
const isDark = ref(document.documentElement.classList.contains('dark'));

const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
const markdownFiles = ref<Record<string, string>>({});
for (const path in modules) {
  const name = path.split('/').pop() as string;
  markdownFiles.value[name] = '';
}

const selectedMarkdown = ref('');

async function load(name: string) {
  const loader = modules[`../content/blog/${name}`] as () => Promise<string>;
  selectedMarkdown.value = await loader();
}

// Auto‑load the most recent 5 markdown files on component mount
onMounted(() => {
  const recent = Object.keys(modules).slice(0, 5);
  recent.forEach((path) => {
    const name = path.split('/').pop() as string;
    load(name);
  });
  
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    isDark.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    isDark.value = false;
  }
});

function toggleTheme() {
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
    isDark.value = false;
  } else {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDark.value = true;
  }
}


// Initialize theme from localStorage
// Duplicate theme initialization removed

// Duplicate toggleTheme removed
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