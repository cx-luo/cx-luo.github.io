<script setup lang="ts">
import { ref } from "vue";

const educations = ref([
  {
    institution: "North China Electric Power University",
    location: "Beijing, China",
    degree: "Master of Engineering — Electronic Information (AI Focus)",
    dates: "Sep 2020 - Jun 2023",
    courses: [
      "Artificial Intelligence",
      "Data Warehouse and Data Mining",
      "Network Information Security",
      "Advanced Software Engineering",
      "Advanced Computer Networks",
    ],
    thesis:
      "Research on Database Performance Optimization in SaaS Multi-tenant Mode Based on Deep Learning",
  },
  {
    institution: "Shijiazhuang University",
    location: "Shijiazhuang, China",
    degree: "Bachelor of Science — Information and Computing Science",
    dates: "Sep 2011 - Jun 2015",
    courses: [
      "Advanced Algebra",
      "Mathematical Analysis",
      "Analytic Geometry",
      "Discrete Mathematics",
      "Real Variable Function",
      "Complex Variable Function",
      "Data Structures and Algorithm Analysis",
      "MATLAB Programming and Scientific Computing",
      "Object-Oriented Programming",
      "Computer Graphics",
      "Software Engineering",
    ],
  },
]);
</script>

<template>
  <section id="education" class="resume-section">
    <h2 class="section-title">EDUCATION</h2>
    <div
      v-for="(edu, index) in educations"
      :key="index"
      class="edu-card section-card"
    >
      <div class="edu-header">
        <span class="edu-school">{{ edu.institution }}</span>
        <span class="edu-degree">{{ edu.degree }}</span>
        <span class="edu-meta">{{ edu.dates }}</span>
        <span class="edu-meta">{{ edu.location }}</span>
      </div>
      <p class="edu-detail">
        <span class="edu-label">Courses:</span>
        <span>{{ edu.courses.join(", ") }}</span>
      </p>
      <p v-if="edu.thesis" class="edu-detail">
        <span class="edu-label">Thesis:</span>
        <em>{{ edu.thesis }}</em>
      </p>
    </div>
  </section>
</template>
