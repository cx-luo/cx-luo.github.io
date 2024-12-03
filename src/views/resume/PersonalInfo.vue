<script setup lang="ts">
import { ref } from "vue";
import {
  Mail,
  CityOne,
  Local,
  Github,
  DocumentFolder,
} from "@icon-park/vue-next";
import { ElMessage } from "element-plus";
import { Icon } from "@iconify/vue";

const src = "https://img.lingxi.site/202411280923154.png";
const size = ref(30);

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

const open_link_new_window = (url: string) => {
  window.open(url);
};
</script>

<template>
  <div class="avatar-top">
    <el-space direction="vertical" :size="size">
      <el-avatar :src="src" :size="200" />
      <div>
        <h2>Chengxiang Luo</h2>
        <el-text style="font-family: serif; font-weight: bold; color: black"
          >罗呈祥</el-text
        >
      </div>
      <div class="my-el-space">
        <el-row>
          <el-icon>
            <city-one />
          </el-icon>
          <el-link
            class="my-el-link"
            @click="open_link_new_window('https://www.pharmaron.com/')"
            >Pharmaron</el-link
          >
        </el-row>
        <el-row>
          <el-icon>
            <local fill="#333" />
          </el-icon>
          <el-text class="my-el-link">Beijing, China</el-text>
        </el-row>
        <el-row>
          <el-icon>
            <Mail theme="outline" size="20" fill="#333" />
          </el-icon>
          <el-link
            class="my-el-link"
            @click="copyLink('andrew.luo1992[at]gmail[dot]com')"
            >Email</el-link
          >
        </el-row>
        <el-row>
          <Icon icon="jam:linkedin-square" />
          <el-link
            class="my-el-link"
            @click="
              open_link_new_window(
                'https://www.linkedin.com/in/chengxiang-luo/',
              )
            "
          >
            LinkedIn
          </el-link>
        </el-row>
        <el-row>
          <el-icon>
            <github theme="outline" size="20" fill="#333" />
          </el-icon>
          <el-link
            class="my-el-link"
            @click="open_link_new_window('https://github.com/cx-luo')"
            >Github</el-link
          >
        </el-row>
        <el-row>
          <el-icon>
            <DocumentFolder theme="outline" size="20" fill="#333" />
          </el-icon>
          <el-link
            class="my-el-link"
            @click="open_link_new_window('https://www.lingxi.site/')"
            >Blog</el-link
          >
        </el-row>
      </div>
    </el-space>
  </div>
</template>

<style scoped>
.my-el-space .ep-row {
  margin: 10px 0;
}

.avatar-top {
  margin-top: 10%;
  align-items: center;
}

.my-el-link {
  font-family: serif;
  margin-left: 5px;
  color: black;
}
</style>
