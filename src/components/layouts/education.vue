<script setup lang="ts">
import { ref } from "vue";

const educations = ref([
  {
    institution: "North China Electric Power University",
    location: "Beijing, China",
    degree: "ME in Computer Technology (AI Focus)",
    dates: "Sep 2020 - Jun 2023",
    courses: [
      "Data Warehousing and Data Mining",
      "Network Information Security",
      "Advanced Software Engineering",
      "Advanced Computer Networks",
      "Artificial Intelligence",
    ],
    thesis:
      "Study on database performance optimisation under SaaS multi-tenancy model based on deep learning",
  },
  {
    institution: "Shijiazhuang University",
    location: "Shijiazhuang, China",
    degree: "BS in Information and Computing Science",
    dates: "Sep 2011 - Jun 2015",
    courses: [
      "Computer Organisation and Architecture",
      "C Programming Language",
      "Discrete Mathematics",
      "Real Variable Functions",
      "Complex Variable Functions",
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
  <el-row class="my-el-row">
    <el-text class="s4" id="education">EDUCATION</el-text>
  </el-row>
  <div v-for="(edu, index) in educations" :key="index">
    <el-row>
      <div>
        <el-col
          ><span class="h3">{{ edu.institution }}</span
          ><span class="s5">{{ edu.location }}</span>
          <span class="s6"
            >{{ edu.degree }} <span class="s7">{{ edu.dates }}</span></span
          >
        </el-col>
      </div>
    </el-row>
    <p>
      <el-row>
        <el-col :md="1" class="h4-courses">Courses:</el-col>
        <el-col :md="19" class="s7-courses">
          <span>{{ edu.courses.join(", ") }}</span>
        </el-col>
      </el-row>
      <el-row>
        <p class="h4" v-if="edu.thesis">
          Thesis: <i>{{ edu.thesis }}</i>
        </p>
      </el-row>
    </p>
  </div>
</template>

<style scoped>
.h4-courses {
  font-family: serif;
  margin-left: 30px;
  font-weight: bold;
  font-size: 11pt;
  text-align: left;
}

.s7-courses {
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  margin-left: 20px;
  font-size: 11pt;
  text-align: justify;
  text-align-last: left; /* 确保最后一行也进行两端对齐 */
}
</style>
