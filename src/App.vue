<template>
  <el-config-provider namespace="ep">
    <el-container>
<!--      <el-header>-->
<!--        <BaseHeader/>-->
<!--      </el-header>-->
      <el-container>
        <el-col :md="3" :sm="8" :xs="18"/>
        <!--        <el-col :md="6" :sm="8" :xs="18">-->
        <el-aside>
          <PersonalInfo/>
        </el-aside>
        <!--        </el-col>-->
        <!--        -->
        <el-main>
          <personal-detail/>
        </el-main>
        <!--        </el-col>-->
      </el-container>
    </el-container>
  </el-config-provider>
</template>
<script lang="ts" setup>
import PersonalInfo from "~/views/resume/PersonalInfo.vue";
import PersonalDetail from "~/views/resume/PersonalDetail.vue";
import {ToTop} from "@icon-park/vue-next"
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
