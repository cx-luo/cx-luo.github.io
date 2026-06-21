<script setup lang="ts">
import { open_link_new_window } from "~/composables/tools";

const projects = [
  {
    name: "eLabX",
    description:
      "An AI-driven electronic laboratory notebook (ELN) designed to help researchers, chemists, and engineers record and organize experimental data efficiently.",
    url: "https://github.com/cx-luo/eLabX",
  },
  {
    name: "go-indigo",
    description:
      "A Go cheminformatics toolkit based on the Indigo library, providing high-performance molecule and reaction processing via CGO bindings.",
    url: "https://github.com/cx-luo/go-indigo",
  },
];
</script>

<template>
  <section id="opensource" class="resume-section">
    <h2 class="section-title">OPEN SOURCE</h2>
    <div class="os-grid">
      <div
        v-for="project in projects"
        :key="project.name"
        class="os-card"
      >
        <h3 class="os-name">{{ project.name }}</h3>
        <p class="os-desc">{{ project.description }}</p>
        <span class="os-link" @click="open_link_new_window(project.url)">
          {{ project.url }}
        </span>
      </div>
    </div>
  </section>
</template>
