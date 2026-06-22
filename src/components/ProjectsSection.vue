<template>

<section class="max-w-2xl mx-auto px-6 pt-28 pb-20">


  <div class="mb-8">

    <h2
      class="font-['Inter'] text-xl font-semibold text-foreground mb-1"
    >
      Projetos
    </h2>
    <p
      class="font-['Inter'] text-sm"
      style="color:#888"
    >
      Trabalhos em desenvolvimento, pesquisa e open source.
    </p>

  </div>

  <div class="flex flex-wrap gap-1.5 mb-8">

    <button
      v-for="t in projectTypes"
      :key="t"
      @click="filter = t"
      class="font-['Inter'] text-xs px-3 py-1 rounded-full border transition-all"
      :style="{
        background: filter === t ? '#f97316' : 'transparent',
        color: filter === t ? '#fff' : '#888',
        borderColor: filter === t ? '#42b883' : '#e8e8e8'
      }"
    >
      {{ t }}
    </button>

  </div>

  <div>
    <div
      v-for="(p,i) in posts"
      :key="p.title"
      class="py-5 flex items-start justify-between gap-4"
      :style="{
        borderTop: i === 0 ? '1px solid #e8e8e8' : '',
        borderBottom:'1px solid #e8e8e8'
      }"
    >
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">


          <span
            class="font-['Inter'] text-sm font-medium text-foreground"
          >
            {{ p.title }}
          </span>


          <span
            class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded"
            style="background:#f5faf8;color:#42b883"
          >
            {{ p.type }}
          </span>
        </div>
        <p
          class="font-['Inter'] text-sm mb-2"
          style="color:#666;line-height:1.6"
        >
          {{ p.description }}
        </p>

        <div class="flex gap-1.5 flex-wrap">
          <span
            v-for="tag in p.tags"
            :key="tag"
            class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded"
            style="background:#f5f5f5;color:#888"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <a
          v-if="p.github"
          :href="p.github"
          target="_blank"
          class="text-gray-300 hover:text-black"
        >
          Github
        </a>
        <a
          v-if="p.demo"
          :href="p.demo"
          target="_blank"
          class="text-gray-300 hover:text-green-500"
        >
          Demo
        </a>
        <span
          class="font-['JetBrains_Mono'] text-xs"
          style="color:#ccc"
        >
          {{ p.date }}
        </span>
      </div>
    </div>
  </div>
</section>

</template>

<script setup lang="ts">

import { ref, computed } from "vue";

import { activities } from "@/content/composables/useActivities";


const filter = ref("Todos");


const projectTypes = [
  "Todos",
  "Engenharia",
  "Open Source",
  "Visualização",
  "Produto",
  "Pesquisa"
];

const posts = computed(() => {

  const projects = activities.filter(
    item => item.type === "project"
  );


  if(filter.value === "Todos"){

    return projects;

  }

  return projects.filter(
    item => item.type === filter.value
  );


});
</script>