<template>
  <section class="max-w-2xl mx-auto px-6 pt-28 pb-20">

    <div
      class="flex items-start gap-6 mb-8">

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
          class="font-['Inter'] text-sm leading-relaxed text-justify text-foreground"
          style="max-width:52ch"
        >
          Trabalho na interseção entre pesquisa e desenvolvimento de software.
          Meus interesses incluem cidades inteligentes e computação urbana.
          Atualmente faço mestrado em ciência da computação na Universidade
          Estadual de Feira de Santana.
        </p>

      </div>

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
          class="font-['Inter'] text-xs text-foreground"
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
        class="font-['Inter'] text-xs font-medium mb-4 text-foreground"
        style="
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
              class="font-['Inter'] text-sm text-foreground"
            >
              {{ item.label }}
            </span>

          </div>


          <span
            class="font-['JetBrains_Mono'] text-xs text-foreground"
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

const stats = [

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
