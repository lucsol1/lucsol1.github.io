<template>
  <div class="min-h-screen flex flex-col">
    <HeaderSection
      :current="currentSection"
      @nav="navigate"
    />

    <main class="flex-1">
      <HeroSection
        v-if="currentSection === 'home'"
        @nav="navigate"
      />

      <Projects
        v-else-if="currentSection === 'projects'"
      />

      <Blog
        v-else-if="currentSection === 'blog'"
      />
    </main>

    <FooterSection />
  </div>
</template>
<script setup lang="ts">

import { ref } from "vue";

import HeaderSection from "./components/HeaderSection.vue";
import HeroSection from "./components/HeroSection.vue";
import Projects from "./components/ProjectsSection.vue";
// import Blog from "./components/Blog.vue";
import FooterSection from "./components/FooterSection.vue";

type Section = "home" | "projects" | "blog";


// abre na home
const currentSection = ref<Section>("home");


function navigate(section: Section){

  currentSection.value = section;

}

</script>