<script setup lang="ts">
import { ref } from "vue";

const scrollbarRef = ref<{ setScrollTop: (value: number) => void }>();
const containerRef = ref<HTMLElement>();

const navItems = [
  { id: "summary", label: "Summary" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "opensource", label: "Open Source" },
  { id: "technical", label: "Skills" },
  { id: "cert", label: "Certs" },
  { id: "other", label: "Contributions" },
  { id: "projectPresentation", label: "Projects" },
];

const scrollToSection = (id: string) => {
  const container = containerRef.value;
  const target = container?.querySelector<HTMLElement>(`#${id}`);

  if (!container || !target) return;

  scrollbarRef.value?.setScrollTop(Math.max(target.offsetTop - 12, 0));
};
</script>

<template>
  <div class="detail-panel">
    <nav class="detail-nav">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="detail-nav-button"
        type="button"
        @click="scrollToSection(item.id)"
      >
        {{ item.label }}
      </button>
    </nav>

    <el-scrollbar ref="scrollbarRef" class="detail-scroll">
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
.detail-panel {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5rem);
}

.detail-scroll {
  flex: 1;
  min-height: 0;
}

@media (max-width: 767px) {
  .detail-panel {
    height: auto;
  }

  .detail-scroll {
    height: auto;
    max-height: none;
  }
}
</style>
