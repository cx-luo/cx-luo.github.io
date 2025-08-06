<script setup lang="ts">
const positions = [
  {
    title: "Pharmaron Inc.",
    location: "Beijing, China",
    role: "Senior Software Engineer (AI Focus)",
    date: "Sep 2023 - present",
    responsibilities: [
      "Led full-stack development of an AI-powered Electronic Lab Notebook (ELN), automating experimental data collection and accelerating model training with custom AI templates, automated data extraction, and integrated feedback loops.",
      "Handled data processing, big data analysis, model deployment, and AI platform maintenance.",
      "Drove secondary development and implementation of project management tools (DzzOffice, Yearning, GitLab, and custom solutions) to enhance R&D project planning, execution, and monitoring.",
    ],
  },
  {
    title: "Empower Education Online (ClassIn Inc.)",
    location: "Beijing, China",
    role: "Senior Database Engineer",
    date: "Sep 2021 - Sep 2023",
    responsibilities: [
      "Designed and implemented database architecture to meet business requirements, ensuring efficient and stable operation across production, testing, and pre-release environments (MySQL, Orchestrator, mmm, etc.).",
      "Developed Orchestrator hook scripts, inspection scripts, and operational tools using Python, Shell, and Go to enhance automation and efficiency.",
      "Conducted compatibility testing between OceanBase and business applications, deployed OB-related tools, and performed functional testing.",
      "Maintained and optimized databases (MongoDB, Redis, Elasticsearch, InfluxDB), executed large table DDL operations, cluster scaling, and MySQL migration to distributed databases.",
    ],
  },
  {
    title: "Whale Cloud Technology",
    location: "Beijing, China",
    role: "Senior Database Delivery Engineer",
    date: "Apr 2021 - Sep 2021",
    responsibilities: [
      "Deployed high-availability and single-node environments for the OCP distributed database cloud platform, including online upgrades for lower OCP versions (government and bank projects).",
      "Implemented three-copy and five-copy environments for OceanBase clusters, including online version upgrades.",
      "Set up high-availability environments and conducted migration tests with OMS data migration tools, performing risk assessments.",
      "Optimized distributed data storage and management by enhancing indexing, query performance, consistency, and fault tolerance through advanced file storage methods (chunking, replication).",
      "Partitioned large-scale data for parallel processing across multiple nodes.",
    ],
  },
  {
    title: "Zhifei Luzhu Biopharmaceutical Co., Ltd.",
    location: "Beijing, China",
    role: "Senior Network & IT Systems Engineer",
    date: "Jul 2017 - Apr 2021",
    responsibilities: [
      "Designed and managed network architecture for enterprise environments, covering 1000+ routers, switches, and firewalls.",
      "Implemented automated maintenance protocols and optimized network performance through strategic routing and switching configurations.",
      "Ensured high availability and fault tolerance with redundant setups, proactively addressing issues via network performance monitoring and analysis.",
      "Optimized and managed SCADA systems for real-time production monitoring and control; implemented and optimized MES systems to enhance transparency and efficiency.",
    ],
  },
  {
    title: "Shijiazhuang Jingying Middle School",
    location: "Shijiazhuang, China",
    role: "Network Engineer",
    date: "Jul 2015 – Jul 2017",
    responsibilities: [
      "Managed and maintained the academic affairs system, ensuring smooth operation for staff and students.",
      "Designed and implemented campus network infrastructure for reliable and secure connectivity.",
      "Developed and executed strategies for system upgrades and network improvements.",
      "Provided technical support and training to faculty and staff.",
      "Ensured data integrity and security within the academic affairs system and campus network.",
    ],
  },
];
</script>

<template>
  <el-row class="my-el-row">
    <el-text id="experience" class="experience-title">EXPERIENCE</el-text>
  </el-row>

  <el-row v-for="(position, index) in positions" :key="index" class="position-row">
    <h3 class="position-header">
      <span class="company">{{ position.title }}</span>
      <span class="role">{{ position.role }}</span>
      <span class="date">{{ position.date }}</span>
      <span class="location">{{ position.location }} </span>
    </h3>
    <ul class="responsibility-list">
      <li v-for="(responsibility, idx) in position.responsibilities" :key="idx" class="responsibility-item">
        {{ responsibility }}
      </li>
    </ul>
  </el-row>
</template>

<style scoped>
.experience-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 22pt;
  font-weight: bold;
  letter-spacing: 2px;
  color: #222;
  margin-bottom: 10px;
}

.position-row {
  margin-bottom: 24px;
}

.position-header {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 16pt;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: baseline;
}

.company {
  font-weight: bold;
  font-size: 16pt;
  color: #1a237e;
  margin-right: 10px;
}

.role {
  font-style: italic;
  font-size: 13pt;
  color: #374151;
  margin-right: 10px;
}

.date {
  font-size: 11pt;
  color: #607d8b;
  margin-right: 10px;
}

.location {
  font-size: 11pt;
  color: #757575;
}

.responsibility-list {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  font-size: 12.5pt;
  color: #222;
  margin-left: 18px;
  margin-bottom: 0;
  padding-left: 18px;
  text-align: justify;
  text-align-last: left;
}

.responsibility-item {
  margin-bottom: 6px;
  line-height: 1.6;
}
</style>
