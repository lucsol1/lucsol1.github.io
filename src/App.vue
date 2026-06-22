<template>
  <!-- aparece sempre -->
  <HeaderSection
    :current="currentSection"
    @nav="navigate"
  />


  <main>

    <!-- Home -->
    <HeroSection
      v-if="currentSection === 'home'"
      @nav="navigate"
    />


    <!-- Projetos -->
    <Projects
      v-else-if="currentSection === 'projects'"
    />


    <!-- Blog -->
    <Blog
      v-else-if="currentSection === 'blog'"
    />

  </main>

</template>



<script setup lang="ts">

import { ref } from "vue";

import HeaderSection from "./components/HeaderSection.vue";
import HeroSection from "./components/HeroSection.vue";
// import Projects from "./components/Projects.vue";
// import Blog from "./components/Blog.vue";


type Section = "home" | "projects" | "blog";


// abre na home
const currentSection = ref<Section>("home");


function navigate(section: Section){

  currentSection.value = section;

}

</script>