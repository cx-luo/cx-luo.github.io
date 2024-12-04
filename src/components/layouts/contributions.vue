<script setup lang="ts">
import { open_link_new_window } from "~/composables/tools";
</script>

<template>
  <el-row>
    <el-text class="s4" id="other">OTHER CONTRIBUTIONS</el-text>
  </el-row>
  <ul class="justified-text">
    <li>
      Raised issues for OceanBase and ﬁxed two bugs.
      <el-link
        @click="
          open_link_new_window(
            'https://github.com/oceanbase/oceanbase/pull/1340#issue-1658457719',
          )
        "
      >
        #1340
      </el-link>
      |
      <el-link
        @click="
          open_link_new_window(
            'https://github.com/oceanbase/oceanbase/pull/1343#issue-1661724667',
          )
        "
      >
        #1343
      </el-link>
    </li>
    <li>
      Spoke as a guest speaker at OceanBase DevCon 2023, sharing tips on using
      and optimizing distributed databases.
      <el-link
        @click="
          open_link_new_window('https://www.bilibili.com/video/BV1XL41187De')
        "
      >
        #bilibili
      </el-link>
      |
      <el-link
        @click="open_link_new_window('https://www.oceanbase.com/devcon2023')"
      >
        #devcon2023
      </el-link>
    </li>
    <li>
      PR for Indigo: indentation errors in docstring description.
      <el-link
        @click="
          open_link_new_window(
            'https://github.com/epam/Indigo/pull/2635#issue-2660516076',
          )
        "
      >
        #2635
      </el-link>
    </li>
    <li>
      Designed and implemented the Pharmaron AI demonstration platform to
      showcase drug synthesis recommendation routes.
    </li>
    <li>
      Designed and developed the ELN system for electronic laboratory data
      entry, and integrated it with the PubChem API.
    </li>
  </ul>
</template>

<style scoped></style>
