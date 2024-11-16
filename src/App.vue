<template>
  <el-config-provider namespace="ep">
    <el-container>
      <el-header>
        <BaseHeader/>
      </el-header>
      <el-container>
        <el-col :md="3" :sm="8" :xs="18"/>
        <!--        <el-col :md="6" :sm="8" :xs="18">-->
        <el-aside>
          <PersonalInfo/>
        </el-aside>
        <!--        </el-col>-->
        <!--        -->
        <el-main class="scrollable-main">
          <el-col :md="20" :sm="8" :xs="18">
            <personal-detail/>
          </el-col>
        </el-main>
        <!--        </el-col>-->
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

.scrollable-main {
  overflow-y: auto; /* 添加垂直滚动条 */
  max-height: calc(100vh - 60px); /* 根据需要调整高度，60px 是头部的高度 */
  padding: 20px; /* 根据需要调整内边距 */
}
</style>
