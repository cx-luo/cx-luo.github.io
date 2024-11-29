<script setup lang="ts">
import {ToTop} from "@icon-park/vue-next";
import {ref} from "vue";
import ProjectExperience from "~/components/layouts/projectExperience.vue";
import WorkExperience from "~/components/layouts/workExperience.vue";

const containerRef = ref()

</script>

<template>
  <div>
    <el-row>
      <el-col :md="3"/>
      <el-col :md="10">
        <el-anchor :container="containerRef" :offset="70" direction="horizontal">
          <el-anchor-link href="#summary" title="SUMMARY"/>
          <el-anchor-link href="#education" title="EDUCATION"/>
          <el-anchor-link href="#experience" title="EXPERIENCE"/>
          <el-anchor-link href="#technical" title="TECHNICAL SKILLS"/>
          <el-anchor-link href="#cert" title="CERTIFICATIONS"/>
          <el-anchor-link href="#other" title="OTHER CONTRIBUTIONS"/>
          <el-anchor-link href="#projectExperience" title="PROJECT EXPERIENCE"/>
        </el-anchor>
      </el-col>
      <el-col :md="10">
      </el-col>
    </el-row>
    <div ref="containerRef" style="margin-top: 20px">
      <el-scrollbar height="86vh">
        <el-row>
          <el-col :md="20" :sm="20" :xs="18">
            <summury/>

            <education/>

            <work-experience/>

            <it-skills/>

            <certifications/>

            <el-row>
              <el-text class="s4" id="other">OTHER CONTRIBUTIONS</el-text>
            </el-row>
            <ul class="justified-text">
              <li>Raised issues for OceanBase and ﬁxed two bugs.</li>
              <li>Spoke as a guest speaker at OceanBase DevCon 2023, sharing tips on using and optimizing distributed
                databases.
              </li>
              <li>Designed and implemented the Pharmaron AI demonstration platform to showcase drug synthesis
                recommendation routes.
              </li>
              <li>Designed and developed the ELN system for electronic laboratory data entry, and integrated it with the
                PubChem API.
              </li>
            </ul>
          </el-col>
          <el-col :md="4" :sm="8" :xs="18"/>
        </el-row>
        <project-experience/>
      </el-scrollbar>
    </div>
    <el-backtop target=".el-scrollbar__wrap" :right="60" :bottom="60">
      <ToTop/>
    </el-backtop>
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

.p, p {
  font-family: serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h3, h3 {
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

.h4, h4 {
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
  margin-left: 10px;
}

.s8 {
  font-family: sans-serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h2, h2 {
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
