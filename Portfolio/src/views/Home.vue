<script setup>
import AppHero from "@/components/sections/HeroSection.vue";
import About from "@/components/sections/AboutSection.vue";
import ProjectOverview from "@/components/sections/ProjectsOverview.vue";
import MiniCaseStudy from "@/components/sections/MiniCaseStudy.vue";
import Contact from "@/components/sections/ContactSection.vue";
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const text = document.querySelector(".quote-text");
  if (!text) return;

  const words = text.innerText.split(" ");
  text.innerHTML = words
    .map(word => `<span class="word">${word}</span>`)
    .join(" ");

  gsap.from(".quote-text .word", {
    y: 20,
    autoAlpha: 0,
    stagger: 0.06,
    duration: 2,
    ease: "power3.out"
  });
});
</script>

<template>
  <div id="intro" class="intro-quote">
    <h1 class="quote-text">
      “Not knowing something yet is just the first step toward mastering it.”
    </h1>
  </div>

  <AppHero />
  <About />
  <MiniCaseStudy />
  <ProjectOverview />
  <Contact />
</template>
