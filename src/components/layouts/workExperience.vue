<script setup lang="ts">
import { ref } from "vue";

const positions = ref([
  {
    title: "Pharmaron Inc.",
    location: "Beijing, China",
    role: "Senior Software Engineer(AI Focus)",
    date: "Sep 2023 - present",
    responsibilities: [
      "Led the Full-Stack development of an AI-powered Electronic Lab Notebook (ELN), automating experimental data collection and accelerating model training with custom AI templates, automated data extraction, and integrated feedback loops.",
      "Engaged in data processing, big data analysis, model deployment, and AI platform maintenance.",
      "Led the secondary development and implementation of project management tools, including DzzOffice (collaborative office platform), Yearning, GitLab, and custom-designed solutions, to enhance the planning, execution, and monitoring of R&D projects.",
    ],
  },
  {
    title: "Empower Education Online(ClassIn Inc.)",
    location: "Beijing, China",
    role: "Senior Database Engineer",
    date: "Sep 2021 - Sep 2023",
    responsibilities: [
      "Led the design and implementation of the database architecture to meet business requirements, ensuring efficient and stable operation across production, testing, and pre-release environments (including MySQL, Orchestrator, mmm, etc.).",
      "Developed Orchestrator hook scripts, inspection scripts, and other operational tools using Python, Shell, and Go, enhancing automation and operational efficiency.",
      "Conducted compatibility testing between OceanBase and business applications, deployed OB-related tools, and performed functional testing.",
      "Maintained and optimized various databases including MongoDB, Redis, Elasticsearch, and InfluxDB, and executed large table DDL operations, cluster scaling, and MySQL migration to distributed databases.",
    ],
  },
  {
    title: "Whale Cloud Technology",
    location: "Beijing, China",
    role: "Senior Database Delivery Engineer",
    date: "Apr 2021 - Sep 2021",
    responsibilities: [
      "Deployed high-availability and single-node environments for the OCP distributed database cloud platform, including online upgrades for lower OCP versions. (Government and Bank Projects)",
      "Implemented three-copy and five-copy environments for OceanBase database clusters, including online version upgrades.",
      "Set up high-availability environments and conducted migration tests with OMS data migration tools, performing risk assessments for data migration.",
      "Optimized distributed data storage and management by enhancing indexing, query performance, consistency, and fault tolerance through advanced file storage methods like chunking and replication.",
      "Divide large-scale data into smaller parts to distribute across multiple nodes for parallel processing.",
    ],
  },
  {
    title: "Zhifei Luzhu Biopharmaceutical Co., Ltd.",
    location: "Beijing, China",
    role: "Senior Network & IT Systems Engineer",
    date: "Jul 2017 - Apr 2021",
    responsibilities: [
      "Designed and managed network architecture for enterprise environments, encompassing around 1000+ routers, switches, and firewalls.",
      "Implemented automated maintenance protocols and optimized network performance through strategic routing and switching configurations, ensuring reliability and efficiency.",
      "Ensured high availability and fault tolerance with redundant setups, and proactively addressed issues by monitoring and analyzing network performance metrics.",
      "Optimized and managed SCADA systems for real-time monitoring and control of production processes. Implemented and optimized MES systems to enhance transparency and efficiency in production processes.",
    ],
  },
  {
    title: "Shijiazhuang Jingying Middle School",
    location: "Shijiazhuang, China",
    role: "Network Engineer",
    date: "Jul 2015 – Jul 2017",
    responsibilities: [
      "Managed and maintained the academic affairs system, ensuring smooth and efficient operation for staff and students.",
      "Designed and implemented campus network infrastructure to support reliable and secure connectivity.",
      "Developed and executed strategies for system upgrades and network improvements, enhancing overall performance.",
      "Provided technical support and training to faculty and staff on system and network usage.",
      "Ensured data integrity and security within the academic affairs system and campus network.",
    ],
  },
]);
</script>

<template>
  <el-row class="my-el-row">
    <el-text id="experience" class="s4">EXPERIENCE</el-text>
  </el-row>

  <el-row v-for="(position, index) in positions" :key="index">
    <h3>
      <span>{{ position.title }}</span>
      <span class="h4">{{ position.role }}</span>
      <span class="s6">{{ position.date }}</span>
      <span class="s7">{{ position.location }} </span>
    </h3>
    <ul class="justified-text">
      <li v-for="(responsibility, idx) in position.responsibilities" :key="idx">
        {{ responsibility }}
      </li>
    </ul>
  </el-row>
</template>

<style scoped></style>
