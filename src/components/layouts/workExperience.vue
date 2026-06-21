<script setup lang="ts">
const positions = [
  {
    title: "AI for Science Institute, Beijing (AISI)",
    location: "Beijing, China",
    role: "AI4Science Researcher — Cheminformatics Engineering / Molecular Representation",
    date: "Feb 2026 - Present",
    responsibilities: [
      "Conduct AI4Science research at the intersection of molecular editors, molecular representation, and cheminformatics engineering for drug discovery and scientific intelligence workflows.",
      "Built Ketcher/Indigo-based molecular editing capabilities, integrating rendering, structure editing, validation, standardization, format conversion, and descriptor services into reusable tooling.",
      "Designed molecular representation pipelines covering SMILES/SMARTS, Molfile/SDF, descriptors, fingerprints, and Markush structures, transforming heterogeneous chemical records into model-ready features.",
      "Researched Markush representation and enumeration workflows for generic chemical structures, supporting patent-oriented abstraction, substructure matching, and chemical space exploration.",
      "Connected molecular editing, feature extraction, molecular search, and downstream model tasks into AI platform workflows for AI4Science applications.",
    ],
  },
  {
    title: "Pharmaron Beijing Co., Ltd.",
    location: "Beijing, China",
    role: "AIDD Researcher — Algorithm Engineer / AI Platform",
    date: "Sep 2023 - Dec 2025",
    responsibilities: [
      "Built AIDD prototype systems combining cheminformatics features and deep learning models for reaction-condition recommendation and retrosynthesis, improving compound R&D decision support.",
      "Designed an AI-driven Electronic Lab Notebook (ELN) with PubChem integration and chemical metadata management, improving data quality and reducing manual data entry time by 40%.",
      "Developed LLM-assisted experiment planning workflows that generated procedure suggestions from reaction routes, experimental conditions, and historical experiment context.",
      "Built parallel chemical data processing pipelines with RDKit, ChemAxon, ChemDraw, and Open Babel for standardization, deduplication, descriptor extraction, and model-training dataset preparation.",
      "Delivered AI platform and agent capabilities using LangChain/LangGraph and Dify, covering public data crawling, governance, model deployment, feedback collection, and continuous optimization.",
    ],
  },
  {
    title: "Beijing Yio Education Technology Co., Ltd.",
    location: "Beijing, China",
    role: "Database Engineer",
    date: "Sep 2021 - Sep 2023",
    responsibilities: [
      "Built Python/Go database operations toolchains for inspection, orchestration hooks, capacity planning, and resource pooling, improving database cluster utilization by 35%.",
      "Designed active-active disaster recovery solutions with RPO<1 minute and RTO<5 minutes, ensuring 99.9% availability of core data assets.",
      "Explored AI-driven autonomous database optimization by applying machine learning (DRL) to automated parameter tuning for throughput and latency improvement.",
      "Led SQL tuning, TB-level Online DDL, dynamic scaling, and centralized-to-distributed database migration with zero failed cutovers and zero data loss.",
    ],
  },
  {
    title: "Whale Cloud Technology Co., Ltd.",
    location: "Beijing, China",
    role: "Senior Database Delivery Engineer",
    date: "Apr 2021 - Sep 2021",
    responsibilities: [
      "Delivered OCP and OceanBase clusters for government and banking systems, completing online upgrades and core database migrations with zero business interruption.",
      "Built migration assessment, rollback, and delivery documentation practices, ensuring 100% cutover success for core systems and producing 20+ reusable technical solutions.",
    ],
  },
  {
    title: "Beijing Zhifei Lvzhu Biopharmaceutical Co., Ltd.",
    location: "Beijing, China",
    role: "Senior Network and IT Systems Engineer",
    date: "Jul 2017 - Apr 2021",
    responsibilities: [
      "Managed enterprise Oracle databases (10+ instances) and DataGuard architecture in RAC+ASM environments, achieving 99.99% system availability.",
      "Operated enterprise networks covering 1000+ nodes, including routing, switching, firewall, VPN, redundancy, monitoring, and performance optimization.",
      "Promoted MySQL/PostgreSQL adoption and fine-grained permission governance for 200+ accounts, reducing operational risk and supporting FDA GMP compliance.",
    ],
  },
  {
    title: "Shijiazhuang Elite Middle School",
    location: "Shijiazhuang, China",
    role: "Network Engineer",
    date: "Jul 2015 - Jul 2017",
    responsibilities: [
      "Maintained academic affairs systems and campus network infrastructure, supporting daily digital teaching and administration workflows.",
      "Deployed VLAN, firewall, SSLVPN, ACL, and group-policy controls across teaching areas and 500+ domain users, improving network security and user experience.",
    ],
  },
];
</script>

<template>
  <section id="experience" class="resume-section">
    <h2 class="section-title">EXPERIENCE</h2>
    <div
      v-for="(position, index) in positions"
      :key="index"
      class="experience-item"
    >
      <div class="experience-header">
        <span class="experience-company">{{ position.title }}</span>
        <span class="experience-role">{{ position.role }}</span>
        <span class="experience-meta">{{ position.date }}</span>
        <span class="experience-meta">{{ position.location }}</span>
      </div>
      <ul class="experience-list">
        <li
          v-for="(responsibility, idx) in position.responsibilities"
          :key="idx"
        >
          {{ responsibility }}
        </li>
      </ul>
    </div>
  </section>
</template>
