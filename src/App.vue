<template>
  <el-config-provider namespace="ep">
    <div class="resume-page">
      <div class="resume-layout">
        <el-row :gutter="24">
          <el-col :xl="7" :lg="7" :md="8" :sm="24" :xs="24">
            <PersonalInfo />
          </el-col>
          <el-col :xl="17" :lg="17" :md="16" :sm="24" :xs="24">
            <PersonalDetail />
          </el-col>
        </el-row>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import PersonalInfo from "~/views/resume/PersonalInfo.vue";
import PersonalDetail from "~/views/resume/PersonalDetail.vue";
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
</style>
