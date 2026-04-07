<script setup>

import AppHeader from "@/components/layouts/AppHeader.vue"
import AppHero from "@/components/sections/HeroSection.vue"
import About from "@/components/sections/AboutSection.vue"

</script>


<template>

  <AppHeader />

  <main>
  
  <div id="intro" class="intro-quote">
    <h1>
      “Not knowing something yet is just the first step toward mastering it.”
    </h1>
  </div>

    <!-- <section id="hero" class="section hero"> -->
      <!-- Hero kommt gleich -->
      <AppHero />
    <!--</section> -->

    <About />

    <section id="projects" class="section">
      <!-- Projects -->
    </section>

    <section id="contact" class="section">
      <!-- Contact -->
    </section>

  </main>
</template>

