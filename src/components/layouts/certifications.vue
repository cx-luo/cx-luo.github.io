<script setup lang="ts">
const certifications = [
  "MySQL Oracle Certified Professional",
  "Huawei Certified Network Professional",
  "OceanBase Certified Assistant",
];
</script>

<template>
  <section id="cert" class="resume-section">
    <h2 class="section-title">CERTIFICATIONS</h2>
    <div class="cert-grid">
      <span
        v-for="cert in certifications"
        :key="cert"
        class="cert-badge"
      >
        {{ cert }}
      </span>
    </div>
  </section>
</template>
