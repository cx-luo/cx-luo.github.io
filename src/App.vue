<template>
  <el-config-provider namespace="ep">
    <el-container>
      <el-container>
        <el-col :xl="3" :lg="3" :md="3" :sm="0" :xs="0" />
        <el-col :xl="4" :lg="4" :md="4" :sm="7" :xs="24">
          <el-aside>
            <PersonalInfo />
          </el-aside>
        </el-col>
        <el-col :xl="14" :lg="14" :md="14" :sm="17" :xs="24">
          <el-main>
            <personal-detail />
          </el-main>
        </el-col>
      </el-container>
    </el-container>
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

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
