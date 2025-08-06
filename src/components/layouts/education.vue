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
    <el-text class="education-title" id="education">EDUCATION</el-text>
  </el-row>
  <el-row
    v-for="(edu, index) in educations"
    :key="index"
    class="education-block"
    :gutter="8"
  >
    <el-col :span="24">
      <div class="education-header">
        <span class="institution">{{ edu.institution }}</span>
        <span class="degree">{{ edu.degree }}</span>
        <span class="dates">{{ edu.dates }}</span>
        <span class="location">{{ edu.location }}</span>
      </div>
      <div class="courses-thesis">
        <el-row>
          <el-col :md="2" class="courses-label">Courses:</el-col>
          <el-col :md="22" class="courses-list">
            <span>
              <template v-for="(course, cIdx) in edu.courses" :key="cIdx">
                {{ course }}<span v-if="cIdx < edu.courses.length - 1">, </span>
              </template>
            </span>
          </el-col>
        </el-row>
        <el-row v-if="edu.thesis">
          <el-col>
            <span class="thesis-label">Thesis:</span>
            <span class="thesis-content"><i>{{ edu.thesis }}</i></span>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.education-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #222;
  margin-bottom: 16px;
  display: block;
  text-align: left;
}

.education-block {
  margin-bottom: 28px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.institution {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: #1a237e;
  margin-right: 12px;
  letter-spacing: 0.2px;
}

.degree {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-style: italic;
  font-size: 1rem;
  color: #374151;
  margin-right: 12px;
}

.dates {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 0.95rem;
  color: #607d8b;
  margin-right: 10px;
  letter-spacing: 0.1px;
}

.location {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 0.95rem;
  color: #757575;
}

.courses-thesis {
  margin-top: 10px;
}

.courses-label {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  margin-left: 18px;
  color: #1a237e;
}

.courses-list {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-style: italic;
  font-size: 0.98rem;
  text-align: justify;
  text-align-last: left;
  margin-left: 8px;
  color: #374151;
  line-height: 1.6;
}

.thesis-label {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 18px;
  margin-right: 6px;
  color: #1a237e;
}

.thesis-content {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 0.98rem;
  font-style: italic;
  color: #374151;
  line-height: 1.5;
}
</style>