<script setup>
import { onMounted } from "vue"
import gsap from "gsap";

onMounted(() => {

  gsap.to(".hero__border-glow", {
    x: "240%",
    opacity: 0.8,
    duration: 2.6,
    ease: "power2.out",
    delay: 1.5
  });
});

</script>


<template>
  <section id="hero" class="section hero">
    <div class="hero__inner">
      <div class="surface hero__surface">
        <div class="hero__border-glow"></div>
        <h1>Wojciech Strzyzowski</h1>

        <p class="hero__subtitle">
          Web Developer<br />
          I build role-based business applications and automate real-world processes.
        </p>

        <div class="hero__actions">
         <a href= "#projectsView"> Projects</a>
          <a href= "#contact" >Get in touch</a>
        </div>
      </div>
    </div>
  </section>
</template>
