<script setup lang="ts">
const elabxList = [
  "static/img/202411271846983.jpg",
  "static/img/202411271846005.jpg",
  "static/img/202411280956282.png",
  "static/img/202411280949235.png",
];

const projectList = [
  {
    name: "Reaction Condition Prediction",
    category: "AIDD Modeling",
    img: "static/img/202411271846929.jpg",
    previewList: ["static/img/202411271846929.jpg"],
    description:
      "Prototype for reaction-condition recommendation, combining chemistry features with deep learning models to support synthesis planning.",
    tags: ["Reaction", "Deep Learning", "AIDD"],
  },
  {
    name: "Compound Retrosynthesis",
    category: "Drug Discovery",
    img: "static/img/202411271846030.jpg",
    previewList: ["static/img/202411271846030.jpg"],
    description:
      "Retrosynthesis exploration interface for compound route analysis and AI-assisted synthesis decision support.",
    tags: ["Retrosynthesis", "Route Search", "Chemistry"],
  },
  {
    name: "eLabX — AI-driven ELN",
    category: "AI Platform",
    img: "static/img/202411271846005.jpg",
    previewList: elabxList,
    description:
      "AI-driven electronic laboratory notebook for structured experimental records, chemical metadata, and research workflow automation.",
    tags: ["ELN", "PubChem", "LLM"],
  },
];
</script>

<template>
  <section id="projectPresentation" class="resume-section">
    <h2 class="section-title">PROJECTS</h2>
    <div class="project-grid">
      <article
        v-for="item in projectList"
        :key="item.name"
        class="project-card"
      >
        <div class="project-media">
          <el-image
            class="project-cover"
            :src="item.img"
            fit="cover"
            :preview-src-list="item.previewList"
            preview-teleported
          >
            <template #placeholder>
              <div class="project-placeholder">Loading preview...</div>
            </template>
          </el-image>
          <div class="project-overlay">
            <span>Click to preview</span>
          </div>
          <span class="project-count">
            {{ item.previewList.length }} image{{ item.previewList.length > 1 ? "s" : "" }}
          </span>
        </div>
        <div class="project-body">
          <span class="project-category">{{ item.category }}</span>
          <h3 class="project-card-title">{{ item.name }}</h3>
          <p class="project-desc">{{ item.description }}</p>
          <div class="project-tags">
            <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
