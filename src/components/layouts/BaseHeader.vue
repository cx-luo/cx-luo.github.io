<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="layout-header" mode="horizontal">
    <el-menu-item index="1">Element Plus</el-menu-item>
    <el-menu-item index="2">
      <template #title>Workspace</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.layout-header {
  display: flex;
  height: 48px;
  padding: 0;
  margin-left: -1px;
  line-height: 48px;
  color: #fff;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
}
</style>
