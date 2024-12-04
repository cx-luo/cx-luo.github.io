<script setup lang="ts">
import { ref } from "vue";
import MySummary from "~/components/layouts/mySummary.vue";
const containerRef = ref();
</script>

<template>
  <div>
    <el-row>
      <el-col :md="3" />
      <el-col :md="15">
        <el-anchor
          :container="containerRef"
          :offset="70"
          direction="horizontal"
        >
          <el-anchor-link href="#summary" title="SUMMARY" />
          <el-anchor-link href="#education" title="EDUCATION" />
          <el-anchor-link href="#experience" title="EXPERIENCE" />
          <el-anchor-link href="#technical" title="TECHNICAL SKILLS" />
          <el-anchor-link href="#cert" title="CERTIFICATIONS" />
          <el-anchor-link href="#other" title="OTHER CONTRIBUTIONS" />
          <el-anchor-link
            href="#projectPresentation"
            title="PROJECT PRESENTATION"
          />
        </el-anchor>
      </el-col>
      <el-col :md="10"></el-col>
    </el-row>
    <div ref="containerRef" style="margin-top: 20px">
      <el-scrollbar height="86vh">
        <el-row>
          <el-col :md="20" :sm="20" :xs="18">
            <my-summary />

            <education />

            <work-experience />

            <it-skills />

            <certifications />

            <contributions />
          </el-col>
          <el-col :md="4" :sm="8" :xs="18" />
        </el-row>
        <project-presentation />
      </el-scrollbar>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: serif;
  font-weight: bold;
  font-size: 24.5pt;
}

.justified-text {
  font-family: serif;
  text-align: justify;
  text-align-last: left; /* 确保最后一行也进行两端对齐 */
  font-weight: normal;
  color: black;
  font-size: 13pt;
}

.my-el-row {
  margin-top: 10px;
}

.s1 {
  font-family: serif;
  font-weight: normal;
  font-size: 9pt;
}

.s2 {
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 9pt;
}

a {
  font-family: serif;
  font-weight: normal;
  font-size: 9pt;
}

.s3 {
  font-family: serif;
  font-weight: normal;
  text-decoration: underline;
  font-size: 9pt;
}

.s4 {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14pt;
}

.p,
p {
  font-family: serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h3,
h3 {
  font-family: serif;
  font-weight: bold;
  font-size: 11pt;
  margin-left: 20px;
}

.s5 {
  margin-left: 30px;
  font-family: serif;
  font-weight: bold;
  font-size: 10pt;
}

.s6 {
  margin-left: 20px;
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 10pt;
}

.h4,
h4 {
  margin-left: 30px;
  font-family: serif;
  font-weight: bold;
  font-size: 10.5pt;
}

.s7 {
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 10.5pt;
  margin-left: 20px;
}

.s8 {
  font-family: sans-serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h2,
h2 {
  font-family: serif;
  font-weight: bold;
  font-size: 14pt;
}

.s9 {
  font-family: serif;
  font-weight: normal;
  font-size: 11pt;
}

.s10 {
  font-family: serif;
  font-weight: normal;
  font-size: 10pt;
}
</style>
