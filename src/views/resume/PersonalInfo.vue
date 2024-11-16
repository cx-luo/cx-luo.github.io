<script setup lang="ts">
import {ref} from "vue";
import {Mail, CityOne, Local, MessageOne, Github, DocumentFolder} from "@icon-park/vue-next"
import {ElMessage} from "element-plus";

const src = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
const size = ref(30)

let clipboard = navigator.clipboard || {
  writeText: (text) => {
    let copyInput = document.createElement('input');
    copyInput.value = text;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand('copy');
    document.body.removeChild(copyInput);
  }
}

const copyLink = async (url: string) => {
  try {
    await clipboard.writeText(url);
    ElMessage.success('Email address copied to clipboard!');
  } catch (error) {
    ElMessage.error('Failed to copy link: ' + error.message);
  }
};

const open_link_new_window = (url: string) => {
  window.open(url);
}
</script>

<template>
  <div class="avatar-top">
    <el-space direction="vertical" :size="size">
      <el-avatar :src="src" :size="200"/>
      <div>
        <h2>Chengxiang Luo</h2>
        <h3>罗呈祥</h3>
      </div>
      <el-space direction="vertical" :size="15" alignment="flex-start">
        <el-form-item>
          <template #default="scope">
            <el-icon>
              <city-one/>
            </el-icon>
            Pharmaron
          </template>
        </el-form-item>

        <el-form-item>
          <template #default="scope">
            <el-icon>
              <local size="20" fill="#333"/>
            </el-icon>
            Beijing,China
          </template>
        </el-form-item>

        <!--Email-->
        <el-form-item @click="copyLink('andrew.luo1992[at]gmail[dot]com')">
          <template #default="scope">
            <el-icon>
              <Mail theme="outline" size="20" fill="#333"/>
            </el-icon>
            <el-link class="my-el-link">Email</el-link>
          </template>
        </el-form-item>

        <el-form-item @click="open_link_new_window('https://www.linkedin.com/in/chengxiang-luo/')">
          <template #default="scope">
            <el-icon>
              <message-one theme="outline" size="20" fill="#333"/>
            </el-icon>
            <el-link class="my-el-link">LinkedIn</el-link>
          </template>
        </el-form-item>

        <el-form-item @click="open_link_new_window('https://github.com/netluo')">
          <template #default="scope">
            <el-icon>
              <github theme="outline" size="20" fill="#333"/>
            </el-icon>
            <el-link class="my-el-link">Github</el-link>
          </template>
        </el-form-item>

        <el-form-item @click="open_link_new_window('https://www.lingxi.site/')">
          <template #default="scope">
            <el-icon>
              <DocumentFolder theme="outline" size="20" fill="#333"/>
            </el-icon>
            <el-link class="my-el-link">Blog</el-link>
          </template>
        </el-form-item>

      </el-space>
    </el-space>
  </div>
</template>

<style scoped>
.avatar-top {
  margin-top: 10%;
  align-items: center;
}

.my-el-link {
  margin-left: 5px;
  color: black;
}
</style>
