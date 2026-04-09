<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Sind wir auf einer Case‑Study‑Seite?
const isCaseStudy = computed(() =>
  route.name === "CaseStudy"
);

function handleLogoClick() {
  if (isCaseStudy.value) {
    router.push("/");      // ✅ Zurück zur Home
  } else {
    location.hash = "#intro"; // ✅ Scroll auf Home
  }
}
</script>




<template>
    <header class="app-header">
      <nav class="header-nav container">
        <div class="header-brand">
          <h1>
            <a href="#" @click.prevent="handleLogoClick">
              WS
            </a>
          </h1>
        </div>

        <ul v-if="!isCaseStudy" class="header-links">
          <li>
            <a href="#about">What I do / How I think</a>
          </li>
          <li>
            <a href="#case-study">Case Study</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

  </template>
