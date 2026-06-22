<template>
  <section class="max-w-2xl mx-auto px-6 pt-28 pb-20">

    <div class="flex items-start gap-6 mb-8">

      <img
        :src="fotoLucas"
        alt="Lucas Silva de Oliveira"
        class="w-32 h-32 rounded-full object-cover shrink-0"
      />

      <div>

        <h1
          class="font-['Inter'] text-3xl font-semibold text-foreground mb-1"
        >
          Lucas Silva de Oliveira
        </h1>

        <p
          class="font-['Inter'] text-base mb-4 text-primary"
        >
          Pesquisador & Desenvolvedor
        </p>

        <p
          class="font-['Inter'] text-sm leading-relaxed text-justify"
          style="max-width:52ch;color:#444"
        >
          Trabalho na interseção entre pesquisa e desenvolvimento de software.
          Meus interesses incluem cidades inteligentes e computação urbana.
          Atualmente faço mestrado em ciência da computação na Universidade
          Estadual de Feira de Santana.
        </p>

      </div>

    </div>

    <div class="flex flex-wrap gap-2 mb-12">

      <button
        @click="navigate('projects')"
        class="font-['Inter'] text-sm px-4 py-1.5 rounded text-white bg-primary transition-opacity hover:opacity-85"
      >
        Projetos
      </button>

      <button
        @click="navigate('blog')"
        class="font-['Inter'] text-sm px-4 py-1.5 rounded border transition-colors hover:text-primary"
        style="border-color:#e8e8e8;color:#444"
      >
        Blog
      </button>
      <a
        href="mailto:voce@email.com"
        class="font-['Inter'] text-sm px-4 py-1.5 rounded border transition-colors hover:text-primary"
        style="border-color:#e8e8e8;color:#888"
      >
        Contato
      </a>

    </div>


    <div
      style="border-top:1px solid #e8e8e8;margin-bottom:2rem"
    />


    <div class="grid grid-cols-3 gap-6">

      <div
        v-for="stat in stats"
        :key="stat.label"
      >

        <p
          class="font-['Inter'] text-xl font-semibold mb-0.5 text-primary"
        >
          {{ stat.value }}
        </p>


        <p
          class="font-['Inter'] text-xs"
          style="color:#888"
        >
          {{ stat.label }}
        </p>

      </div>

    </div>



    <div
      style="
        border-top:1px solid #e8e8e8;
        margin-top:2rem;
        margin-bottom:2.5rem;
      "
    />



    <div>

      <p
        class="font-['Inter'] text-xs font-medium mb-4"
        style="
          color:#888;
          text-transform:uppercase;
          letter-spacing:.08em;
        "
      >
        Atividade recente
      </p>


      <div class="flex flex-col gap-3">

        <div
          v-for="item in activities"
          :key="item.label"
          class="flex items-center justify-between"
        >

          <div class="flex items-center gap-3">

            <span
              class="font-['JetBrains_Mono'] text-xs px-1.5 py-0.5 rounded"
              :class="
                item.type === 'paper'
                ? 'bg-secondary text-primary'
                : 'bg-muted text-muted-foreground'
              "
            >
              {{ item.type }}
            </span>


            <span
              class="font-['Inter'] text-sm"
              style="color:#222"
            >
              {{ item.label }}
            </span>

          </div>


          <span
            class="font-['JetBrains_Mono'] text-xs"
            style="color:#bbb"
          >
            {{ item.date }}
          </span>


        </div>

      </div>

    </div>


  </section>
</template>

<script setup lang="ts">

import { activities } from "@/content/composables/useActivities";
import fotoLucas from "@/assets/lucas.jpeg";

type Section = "projects" | "blog";

const emit = defineEmits<{
  nav:[section:Section]
}>();


function navigate(section:Section){
  emit("nav",section);
}

const stats = [

  {
    value:"5+",
    label:"anos de experiência"
  },

  {
    value:"10",
    label:"projetos"
  },

  {
    value:"6",
    label:"publicações"
  }

];

</script>