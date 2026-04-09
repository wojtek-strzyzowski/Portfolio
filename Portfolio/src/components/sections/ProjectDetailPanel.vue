
<template>
  <!-- Overlay -->
  <div
    ref="overlay"
    class="project-overlay"
    @click="$emit('close')"
  ></div>

  <!-- Sliding panel -->
  <aside
    ref="panel"
    class="project-panel"
  >
    <header class="project-panel__header">
      <h3>{{ project?.title }}</h3>
      <button class="close" @click="$emit('close')">×</button>
    </header>

    <p class="project-panel__subtitle">
      {{ project?.subtitle }}
    </p>

    <ul v-if="project?.details?.length" class="project-panel__details">
      <li v-for="(item, i) in project.details" :key="i">
        {{ item }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import gsap from "gsap";

const props = defineProps({
  open: Boolean,
  project: Object
});

const panel = ref(null);
const overlay = ref(null);

onMounted(() => {
  gsap.set(panel.value, {
    xPercent: -150,
    yPercent: -50,
    opacity: 0,
    pointerEvents: "none"
  });

  gsap.set(overlay.value, {
    opacity: 0,
    pointerEvents: "none"
  });
});

watch(
  () => props.open,
  (open) => {
    if (open) {
      gsap.to(overlay.value, {
        opacity: 0.35,
        pointerEvents: "auto",
        duration: 1.2
      });

      gsap.to(panel.value, {
        xPercent: -50,
        opacity: 1,
        pointerEvents: "auto",
        duration: 1.2,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(panel.value, {
        xPercent: -150,
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
        ease: "power2.in"
      });

      gsap.to(overlay.value, {
        opacity: 0,
        pointerEvents: "none",
        duration:1
      });
    }
  }
);
</script>
