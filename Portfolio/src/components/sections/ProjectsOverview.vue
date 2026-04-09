<script setup>
import { ref } from "vue";
import { projects } from "@/data/project";
import ProjectDetailPanel from "./ProjectDetailPanel.vue"



import { useRouter } from "vue-router";

const router = useRouter();

function goToCase(id) {
  closeProject();               // ✅ Panel erst schließen
  router.push(`/case/${id}`);   // ✅ dann Seite wechseln
}


const activeProject = ref(null);
const isOpen = ref(false);

function openProject(project) {
  activeProject.value = project;
  isOpen.value = true;
}

function closeProject() {
  isOpen.value = false;
  activeProject.value = null;
}
</script>

<template>
  <section class="projects-overview">
    <h2 class="carousel_title">Selected Projects</h2>

    <div class="carousel">
      <div class="carousel__inner">
        <div
          v-for="project in projects"
          :key="project.id"
          class="carousel__card"
          @click="openProject(project)"
        >
          <h3>{{ project.cardTitle }}</h3>
          <p>{{ project.cardSubtitle }}</p>
        </div>
      </div>
    </div>

    <!-- ✅ Detail Panel
    <ProjectDetailPanel
      :open="isOpen"
      :project="activeProject"
      @close="closeProject"
    />
     -->
     
    <ProjectDetailPanel
      :open="isOpen"
      :project="activeProject"
      @close="closeProject"
      @view-case-study="goToCase"
    />

  </section>
</template>