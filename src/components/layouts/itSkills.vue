<script setup lang="ts">
import { Icon } from "@iconify/vue";

const skillSections = [
  {
    title: "Programming Languages",
    icons: [
      { icon: "vscode-icons:file-type-python" },
      { icon: "vscode-icons:file-type-go-gopher" },
      { icon: "tabler:file-type-sql", style: "color: #15bfd5" },
      { icon: "vscode-icons:file-type-js-official" },
      { icon: "vscode-icons:file-type-typescript-official" },
      { icon: "catppuccin:powershell" },
      { icon: "vscode-icons:file-type-c" },
      { icon: "vscode-icons:file-type-cpp" },
    ],
  },
  {
    title: "Frameworks & Tools",
    icons: [
      { icon: "devicon:pandas-wordmark" },
      { icon: "vscode-icons:file-type-numpy" },
      { icon: "logos:tensorflow" },
      { icon: "devicon:pytorch" },
      { icon: "simple-icons:fastapi" },
      { icon: "devicon:docker-wordmark" },
      { icon: "skill-icons:kafka" },
      { icon: "simple-icons:langchain" },
      { icon: "devicon:linux" },
      { icon: "devicon:git" },
    ],
  },
  {
    title: "Cheminformatics",
    tags: [
      "RDKit",
      "Indigo",
      "Ketcher",
      "Open Babel",
      "SMILES/SMARTS",
      "SDF/Molfile",
      "Molecular Descriptors",
      "Fingerprints",
      "Markush Structures",
    ],
  },
  {
    title: "Databases",
    icons: [
      { icon: "devicon:oracle" },
      { icon: "devicon:mysql" },
      { icon: "devicon:postgresql" },
      { icon: "devicon:mongodb" },
      { icon: "devicon:redis" },
      { icon: "simple-icons:elasticsearch" },
    ],
  },
];
</script>

<template>
  <section id="technical" class="resume-section">
    <h2 class="section-title">TECHNICAL SKILLS</h2>
    <div
      v-for="section in skillSections"
      :key="section.title"
      class="skill-block"
    >
      <p class="skill-block-title">{{ section.title }}</p>
      <div v-if="section.icons" class="skill-icons">
        <span
          v-for="item in section.icons"
          :key="item.icon"
          class="skill-icon-wrap"
        >
          <Icon
            :icon="item.icon"
            width="32"
            v-bind="item.style ? { style: item.style } : {}"
          />
        </span>
      </div>
      <div v-else-if="section.tags" class="skill-tags">
        <el-tag
          v-for="tag in section.tags"
          :key="tag"
          effect="plain"
        >
          {{ tag }}
        </el-tag>
      </div>
    </div>
  </section>
</template>
