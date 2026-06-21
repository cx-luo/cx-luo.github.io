<script setup lang="ts">
import { ref } from "vue";

const containerRef = ref<HTMLElement>();
</script>

<template>
  <div class="detail-panel">
    <nav class="detail-nav">
      <el-anchor
        :container="containerRef"
        :offset="80"
        direction="horizontal"
      >
        <el-anchor-link href="#summary" title="Summary" />
        <el-anchor-link href="#education" title="Education" />
        <el-anchor-link href="#experience" title="Experience" />
        <el-anchor-link href="#opensource" title="Open Source" />
        <el-anchor-link href="#technical" title="Skills" />
        <el-anchor-link href="#cert" title="Certs" />
        <el-anchor-link href="#other" title="Contributions" />
        <el-anchor-link href="#projectPresentation" title="Projects" />
      </el-anchor>
    </nav>

    <el-scrollbar class="detail-scroll">
      <div ref="containerRef" class="detail-content">
        <my-summary />
        <education />
        <work-experience />
        <open-source-projects />
        <it-skills />
        <certifications />
        <contributions />
        <project-presentation />
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.detail-scroll {
  height: calc(100vh - 5rem);
}

@media (max-width: 767px) {
  .detail-scroll {
    height: auto;
    max-height: none;
  }
}
</style>
