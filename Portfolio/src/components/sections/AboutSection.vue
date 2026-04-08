<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  document.querySelectorAll(".service-card").forEach(card => {
    const tl = gsap.timeline({ paused: true });

    tl.to(card.querySelector(".border.top"), {
      left: "100%",
      opacity: 1,
      duration: 1.2,
      ease: "none"
    })
    .to(card.querySelector(".border.right"), {
      top: "100%",
      opacity: 1,
      duration: 1.2,
      ease: "none"
    })
    .to(card.querySelector(".border.bottom"), {
      right: "100%",
      opacity: 1,
      duration: 1.2,
      ease: "none"
    })
    .to(card.querySelector(".border.left"), {
      bottom: "100%",
      opacity: 1,
      duration: 1.2,
      ease: "none"
    });

    card.addEventListener("mouseenter", () => {
      tl.restart();
    });

    card.addEventListener("mouseleave", () => {
      gsap.set(card.querySelectorAll(".border"), { opacity: 0 });
      tl.pause(0);
    });
  });
});
</script>


<template>
    <section id="about" class="section approach">
      <div class="approach__inner">
  
        <h2 class="approach__title">How I Work</h2>
  
        <div class="approach__grid">
  
          <div class="approach__item service-card">
            <span class="border top"></span>
            <span class="border right"></span>
            <span class="border bottom"></span>
            <span class="border left"></span>

            <h3>Process‑Driven Development</h3>
            <p>
              I work from clear requirements toward small, testable steps.
              Structure and clarity come before speed.
            </p>
          </div>
  
          <div class="approach__item service-card">
            <span class="border top"></span>
            <span class="border right"></span>
            <span class="border bottom"></span>
            <span class="border left"></span>
            <h3>Role‑Based Thinking</h3>
            <p>
              I adapt my approach depending on context — developer, contributor,
              or facilitator.
            </p>
          </div>
  
          <div class="approach__item service-card">
            <span class="border top"></span>
            <span class="border right"></span>
            <span class="border bottom"></span>
            <span class="border left"></span>
            <h3>Low‑Code Where It Fits</h3>
            <p>
              I use low‑code tools when they reduce complexity and delivery time.
              Custom code when flexibility matters.
            </p>
          </div>
  
          <div class="approach__item service-card">
            <span class="border top"></span>
            <span class="border right"></span>
            <span class="border bottom"></span>
            <span class="border left"></span>
            <h3>Structured Collaboration</h3>
            <p>
              Used to working in Scrum teams with clear feedback loops and
              transparent stakeholder communication.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  </template>
