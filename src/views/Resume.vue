<script setup lang="ts">
import PersonalInfo from "~/views/resume/PersonalInfo.vue";
import PersonalDetail from "~/views/resume/PersonalDetail.vue";
</script>

<template>
  <el-row :gutter="15">
    <el-col :md="3" :sm="8" :xs="18"> </el-col>
    <el-col :md="6" :sm="8" :xs="18">
      <PersonalInfo />
    </el-col>
    <el-col :md="12" :sm="8" :xs="18">
      <el-scrollbar>
        <personal-detail />
      </el-scrollbar>
    </el-col>
    <el-col :md="3" :sm="8" :xs="18"> </el-col>
  </el-row>
</template>

<style scoped></style>
