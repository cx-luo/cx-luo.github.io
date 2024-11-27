<script setup lang="ts">
import {ref} from "vue";

const elabxList = [
  "https://img.lingxi.site/202411271846005.jpg",
  "https://img.lingxi.site/202411271846983.jpg",
]
const projectList = [
  {
    name: "reaction condition predict",
    img: "https://img.lingxi.site/202411271846929.jpg",
    previewList: ["https://img.lingxi.site/202411271846929.jpg"],
    description: "",
  },
  {
    name: "retrosynthesis",
    img: "https://img.lingxi.site/202411271846030.jpg",
    previewList: ["https://img.lingxi.site/202411271846030.jpg"],
    description: "",
  },
  {
    name: "eLabX - AI driven ELN", img: "https://img.lingxi.site/202411271846005.jpg", previewList: elabxList, description: "",
  },
]
// const showViewer = ref(false)
// const showPreview = (val) => {
//   console.log(val)
//   showViewer.value = true;
//   let index = this.index - 1;
//   this.previewList = this.srcList.slice(index).concat(this.srcList.slice(0, index));
// }
// const closeViewer = () => {
//   showViewer.value = false
// }
//
// const previewSwitch = () => {
//   this.imageList.map((item, index) => {
//     if (item.url == this.previewList[val]) {
//       this.imageUrl = this.imageList[index].url;
//       this.index = index + 1;
//     }
//   });
// }
</script>

<template>
  <div>
    <el-row>
      <el-text class="s4" id="projectExperience">PROJECT EXPERIENCE</el-text>
    </el-row>
    <div >
      <el-row>
        <el-col v-for="(item,) in projectList" :md="7" :sm="10" :xs="18">

          <el-card style="height: auto">
            <el-text class="h4">{{ item.name }}</el-text>
            <el-image :src="item.img" fit="scale-down" shape="square"
                      style="width: auto;height: auto" :preview-src-list="item.previewList"/>
            <!--            <el-image-viewer v-if="showViewer"-->
            <!--                             :on-close="closeViewer"-->
            <!--                             :url-list="item.previewList"-->
            <!--                             :on-switch="previewSwitch"/>-->
          </el-card>
        </el-col>

        <!--        <el-col :md="15" :sm="10" :xs="18">-->
        <!--          <el-text>{{ item.description }}</el-text>-->
        <!--        </el-col>-->
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.h4 {
  margin-bottom: 10px;
  font-family: serif;
  font-weight: bold;
  font-size: 13pt;
  color: #0d84e5;
}

.s4 {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14pt;
}
</style>
