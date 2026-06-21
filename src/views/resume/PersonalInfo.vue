<script setup lang="ts">
import { ElMessage } from "element-plus";
import { Icon } from "@iconify/vue";
import { open_link_new_window } from "~/composables/tools";

const src = "static/img/202411280923154.png";

const clipboard = navigator.clipboard || {
  writeText: (text: string) => {
    const copyInput = document.createElement("input");
    copyInput.value = text;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand("copy");
    document.body.removeChild(copyInput);
    return Promise.resolve();
  },
};

const copyLink = async (url: string) => {
  try {
    await clipboard.writeText(url);
    ElMessage.success("Email address copied to clipboard!");
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    ElMessage.error("Failed to copy link: " + message);
  }
};

const items = [
  {
    icon: "icon-park-outline:city-one",
    link: {
      text: "AISI",
      action: () => open_link_new_window("https://www.aisi.ac.cn/"),
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
      action: () => copyLink("andrew.luo1992@gmail.com"),
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
  {
    icon: "simple-icons:csdn",
    link: {
      text: "CSDN",
      action: () =>
        open_link_new_window("https://blog.csdn.net/weixin_46668148"),
    },
  },
];
</script>

<template>
  <aside class="profile-card">
    <div class="profile-avatar-wrap">
      <el-avatar :src="src" :size="120" />
    </div>
    <h1 class="profile-name">Chengxiang Luo</h1>
    <p class="profile-name-cn">罗呈祥</p>
    <span class="profile-tagline">AI4Science · Cheminformatics</span>
    <ul class="contact-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="contact-item"
      >
        <span class="contact-icon">
          <Icon :icon="item.icon" />
        </span>
        <span
          v-if="item.link"
          class="contact-link"
          @click="item.link.action"
        >
          {{ item.link.text }}
        </span>
        <span v-else class="contact-text">{{ item.text }}</span>
      </li>
    </ul>
  </aside>
</template>
