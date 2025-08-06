<script setup lang="ts">
import { Icon } from "@iconify/vue";

const skillSections = [
  {
    title: "Programming Languages",
    icons: [
      { icon: "vscode-icons:file-type-python" },
      { icon: "vscode-icons:file-type-go-gopher" },
      { icon: "vscode-icons:file-type-vue" },
      { icon: "tabler:file-type-sql", style: "color: #15bfd5" },
      { icon: "vscode-icons:file-type-js-official" },
      { icon: "catppuccin:powershell" },
      { icon: "vscode-icons:file-type-c" },
      { icon: "vscode-icons:file-type-cpp" },
      { icon: "devicon:matlab" },
    ],
  },
  {
    title: "Libraries & Tools",
    icons: [
      { icon: "devicon:pandas-wordmark" },
      { icon: "vscode-icons:file-type-numpy" },
      { icon: "logos:tensorflow" },
      { icon: "devicon:pytorch" },
      { icon: "devicon:linux" },
      { icon: "devicon:redhat" },
      { icon: "ri:ubuntu-fill", style: "color: #d54515" },
      { icon: "devicon:git" },
      { icon: "devicon:qt" },
      { icon: "devicon:docker-wordmark" },
    ],
  },
  {
    title: "Databases",
    icons: [
      { icon: "devicon:oracle" },
      { icon: "devicon:mysql" },
      { icon: "devicon:postgresql" },
      { icon: "skill-icons:kafka" },
      { icon: "devicon:redis" },
    ],
  },
];
</script>

<template>
  <div>
    <el-row>
      <el-text class="experience-title" id="technical">TECHNICAL SKILLS</el-text>
    </el-row>
    <template v-for="(section, idx) in skillSections" :key="section.title">
      <el-row>
        <p class="h3">{{ section.title }}:</p>
        <span>
          <Icon
            v-for="(item, i) in section.icons"
            :key="item.icon"
            :icon="item.icon"
            class="skill-icon"
            width="40px"
            v-bind="item.style ? { style: item.style } : {}"
          />
        </span>
      </el-row>
      <el-divider v-if="idx < skillSections.length - 1" class="el-divider" />
    </template>
  </div>
</template>

<style scoped>
.skill-icon {
  margin-left: 5px;
  margin-right: 5px;
}

.el-divider {
  margin: 10px 0;
}

.experience-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 22pt;
  font-weight: bold;
  letter-spacing: 2px;
  color: #222;
  margin-bottom: 10px;
}
</style>
