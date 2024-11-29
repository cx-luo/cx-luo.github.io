<script setup lang="ts">

import {Icon} from "@iconify/vue";
</script>

<template>
  <div>
    <el-row>
      <el-text class="s4" id="technical">TECHNICAL SKILLS</el-text>
    </el-row>
    <el-row>
      <p class="h3">Programming Languages:</p>
      <span>
        <Icon icon="vscode-icons:file-type-python" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-go-gopher" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-vue" class="skill-icon" width="40px"/>
        <Icon icon="tabler:file-type-sql" style="color: #15bfd5" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-js-official" class="skill-icon" width="40px"/>
        <Icon icon="catppuccin:powershell" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-c" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-cpp" class="skill-icon" width="40px"/>
        <Icon icon="devicon:matlab" class="skill-icon" width="40px"/>
      </span>
    </el-row>
    <el-divider class="el-divider"/>
    <el-row>
      <p class="h3">Libraries & Tools:</p>
      <span>
        <Icon icon="devicon:pandas-wordmark" class="skill-icon" width="40px"/>
        <Icon icon="vscode-icons:file-type-numpy" class="skill-icon" width="40px"/>
        <Icon icon="logos:tensorflow" class="skill-icon" width="40px"/>
        <Icon icon="devicon:pytorch" class="skill-icon" width="40px"/>
        <Icon icon="devicon:linux" class="skill-icon" width="40px"/>
        <Icon icon="devicon:redhat" class="skill-icon" width="40px"/>
        <Icon icon="ri:ubuntu-fill" style="color: #d54515" class="skill-icon" width="40px"/>
        <Icon icon="devicon:git" class="skill-icon" width="40px"/>
        <Icon icon="devicon:qt" class="skill-icon" width="40px"/>
        <Icon icon="devicon:docker-wordmark" class="skill-icon" width="40px"/>
      </span>
    </el-row>
    <el-divider class="el-divider"/>
    <el-row>
      <p class="h3">Databases:</p>
      <span>
        <Icon icon="devicon:oracle" class="skill-icon" width="40px"/>
        <Icon icon="devicon:mysql" class="skill-icon" width="40px"/>
        <Icon icon="devicon:postgresql" class="skill-icon" width="40px"/>
        <Icon icon="skill-icons:kafka" class="skill-icon" width="40px"/>
        <Icon icon="devicon:redis" class="skill-icon" width="40px"/>
      </span>
    </el-row>
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
</style>
