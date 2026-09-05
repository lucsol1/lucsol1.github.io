<template>
  <HeaderSection :current="currentSection" @nav="navigate" />
  <router-view />
  <FooterSection />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

// Define possible sections for navigation
type Section = "home" | "projects" | "blog";

// Keep track of current section for header styling
const currentSection = ref<Section>("home");

const router = useRouter();

function navigate(section: Section) {
  currentSection.value = section;
  // Route to the appropriate page
  if (section === "home") {
    router.replace({ path: "/" });
  } else if (section === "projects") {
    router.replace({ path: "/projects" });
  } else if (section === "blog") {
    router.replace({ path: "/blog" });
  }
}
</script>