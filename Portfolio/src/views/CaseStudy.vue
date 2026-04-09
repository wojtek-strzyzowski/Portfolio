<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects } from "@/data/project";

const route = useRoute();
const router = useRouter();

const project = computed(() =>
  projects.find(p => p.id === route.params.id)
);

function goBack() {
  router.push("/");
}
</script>

<template>
  <main v-if="project" class="case-study">

    <!-- Back Button -->
    <button class="back" @click="goBack">
      ← Back to overview
    </button>

    <!-- Header -->
    <header class="case-study__header">
      <h1>{{ project.panelTitle }}</h1>
      <p class="case-study__subtitle">
        {{ project.panelSubtitle }}
      </p>
    </header>

    <!-- Context -->
    <section class="case-study__section">
      <h2>Context</h2>
      <p>{{ project.context }}</p>
    </section>

    <!-- Screenshots -->
    <section
      v-if="project.images && project.images.length"
      class="case-study__screens"
    >
      <div
        v-for="(img, i) in project.images"
        :key="i"
        class="case-study__figure"
      >
        <img
          :src="img"
          alt="Project screenshot"
          class="case-study__image"
        />
      </div>
    </section>

    <!-- Key aspects -->
    <section
      v-if="project.panelDetails && project.panelDetails.length"
      class="case-study__section"
    >
      <h2>Key aspects</h2>
      <ul>
        <li
          v-for="(item, i) in project.panelDetails"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- Outcome -->
    <section
      v-if="project.outcome"
      class="case-study__section"
    >
      <h2>Outcome</h2>
      <p>{{ project.outcome }}</p>
    </section>

  </main>

  <!-- Fallback -->
  <p v-else class="case-study__empty">
    Case study not found.
  </p>
</template>