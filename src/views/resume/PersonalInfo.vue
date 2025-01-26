<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Icon } from "@iconify/vue";
import { getUser } from "~/composables/apis";

const src = "https://img.lingxi.site/202411280923154.png";
const size = ref(30);
getUser();
let clipboard = navigator.clipboard || {
  writeText: (text) => {
    let copyInput = document.createElement("input");
    copyInput.value = text;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand("copy");
    document.body.removeChild(copyInput);
  },
};

const copyLink = async (url: string) => {
  try {
    await clipboard.writeText(url);
    ElMessage.success("Email address copied to clipboard!");
  } catch (error) {
    ElMessage.error("Failed to copy link: " + error.message);
  }
};
import { open_link_new_window } from "~/composables/tools";

const items = [
  {
    icon: "icon-park-outline:city-one",
    link: {
      text: "Pharmaron",
      action: () => open_link_new_window("https://www.pharmaron.com/"),
    },
  },
  {
    icon: "icon-park-outline:local",
    text: "Beijing, China",
  },
  {
    icon: "icon-park-outline:mail",
    link: {
      text: "Email",
      action: () => copyLink("andrew.luo1992[at]gmail[dot]com"),
    },
  },
  {
    icon: "jam:linkedin-square",
    link: {
      text: "LinkedIn",
      action: () =>
        open_link_new_window("https://www.linkedin.com/in/chengxiang-luo/"),
    },
  },
  {
    icon: "icon-park-outline:github",
    link: {
      text: "Github",
      action: () => open_link_new_window("https://github.com/cx-luo"),
    },
  },
  {
    icon: "fluent-mdl2:company-directory",
    link: {
      text: "Blog",
      action: () => open_link_new_window("https://www.lingxi.site/"),
    },
  },
];
</script>

<template>
  <div class="avatar-top">
    <el-space direction="vertical" :size="size">
      <el-avatar :src="src" :size="120" />
      <div>
        <h2>Chengxiang Luo</h2>
        <el-text style="font-family: serif; font-weight: bold; color: black">
          罗呈祥
        </el-text>
      </div>
      <div class="my-el-space">
        <el-col>
          <el-row v-for="(item, index) in items" :key="index">
            <Icon :icon="item.icon" />
            <el-link
              v-if="item.link"
              class="my-el-link"
              @click="item.link.action"
            >
              {{ item.link.text }}
            </el-link>
            <el-text v-else class="my-el-link">{{ item.text }}</el-text>
          </el-row>
        </el-col>
      </div>
    </el-space>
  </div>
</template>

<style scoped>
.my-el-space .ep-row {
  margin: 10px 0;
}

.avatar-top {
  margin-top: 16%;
  align-items: center;
}

.my-el-link {
  font-family: serif;
  margin-left: 5px;
  color: black;
}
</style>
