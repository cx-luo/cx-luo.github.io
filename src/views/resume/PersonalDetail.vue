<script setup lang="ts">
import {ToTop} from "@icon-park/vue-next";
import {ref} from "vue";

const containerRef = ref()
const positions = ref([
  {
    title: 'Pharmaron Inc.',
    location: 'Beijing, China',
    role: 'Senior Software Engineer(AI Focus)',
    date: 'Sep 2023 - present',
    responsibilities: [
      "Led the Full-Stack development of an AI-powered Electronic Lab Notebook (ELN), automating experimental data collection and accelerating model training with custom AI templates, automated data extraction, and integrated feedback loops.",
      "Engaged in data processing, big data analysis, model deployment, and AI platform maintenance.",
      "Led the secondary development and implementation of project management tools, including DzzOffice (collaborative office platform), Yearning, GitLab, and custom-designed solutions, to enhance the planning, execution, and monitoring of R&D projects."
    ]
  },
  {
    title: 'Empower Education Online(ClassIn Inc.)',
    location: 'Beijing, China',
    role: 'Senior Database Engineer',
    date: 'Sep 2021 - Sep 2023',
    responsibilities: [
      "Led the design and implementation of the database architecture to meet business requirements, ensuring efficient and stable operation across production, testing, and pre-release environments (including MySQL, Orchestrator, mmm, etc.).",
      "Developed Orchestrator hook scripts, inspection scripts, and other operational tools using Python, Shell, and Go, enhancing automation and operational efficiency.",
      "Conducted compatibility testing between OceanBase and business applications, deployed OB-related tools, and performed functional testing.",
      "Maintained and optimized various databases including MongoDB, Redis, Elasticsearch, and InfluxDB, and executed large table DDL operations, cluster scaling, and MySQL migration to distributed databases."
    ]
  },
  {
    title: 'Whale Cloud Technology',
    location: 'Beijing, China',
    role: 'Senior Database Delivery Engineer',
    date: 'Apr 2021 - Sep 2021',
    responsibilities: [
      "Deployed high-availability and single-node environments for the OCP distributed database cloud platform, including online upgrades for lower OCP versions. (Government and Bank Projects)",
      "Implemented three-copy and five-copy environments for OceanBase database clusters, including online version upgrades.",
      "Set up high-availability environments and conducted migration tests with OMS data migration tools, performing risk assessments for data migration.",
      "Optimized distributed data storage and management by enhancing indexing, query performance, consistency, and fault tolerance through advanced file storage methods like chunking and replication.",
      "Divide large-scale data into smaller parts to distribute across multiple nodes for parallel processing."
    ]
  },
  {
    title: 'Zhifei Luzhu Biopharmaceutical Co., Ltd.',
    location: 'Beijing, China',
    role: 'Senior Network & IT Systems Engineer',
    date: 'Jul 2017 - Apr 2021',
    responsibilities: [
      "Designed and managed network architecture for enterprise environments, encompassing around 1000+ routers, switches, and firewalls.",
      "Implemented automated maintenance protocols and optimized network performance through strategic routing and switching configurations, ensuring reliability and efficiency.",
      "Ensured high availability and fault tolerance with redundant setups, and proactively addressed issues by monitoring and analyzing network performance metrics.",
      "Optimized and managed SCADA systems for real-time monitoring and control of production processes. Implemented and optimized MES systems to enhance transparency and efficiency in production processes."
    ]
  },
  {
    title: 'Shijiazhuang Jingying Middle School',
    location: 'Shijiazhuang, China',
    role: 'Network Engineer',
    date: 'Jul 2015 – Jul 2017',
    responsibilities: [
      "Managed and maintained the academic affairs system, ensuring smooth and efficient operation for staff and students.",
      "Designed and implemented campus network infrastructure to support reliable and secure connectivity.",
      "Developed and executed strategies for system upgrades and network improvements, enhancing overall performance.",
      "Provided technical support and training to faculty and staff on system and network usage.",
      "Ensured data integrity and security within the academic affairs system and campus network."
    ]
  },
]);
const educations = ref([
  {
    institution: 'North China Electric Power University',
    location: 'Beijing, China',
    degree: 'ME in Computer Technology (AI Focus)',
    dates: 'Sep 2020 - Jun 2023',
    courses: [
      'Data Warehousing and Data Mining',
      'Network Information Security',
      'Advanced Software Engineering',
      'Advanced Computer Networks',
      'Artificial Intelligence'
    ],
    thesis: 'Study on database performance optimisation under SaaS multi-tenancy model based on deep learning'
  },
  {
    institution: 'Shijiazhuang University',
    location: 'Shijiazhuang, China',
    degree: 'BS in Information and Computing Science',
    dates: 'Sep 2011 - Jun 2015',
    courses: [
      'Computer Organisation and Architecture',
      'C Programming Language',
      'Discrete Mathematics',
      'Real Variable Functions',
      'Complex Variable Functions',
      'Data Structures and Algorithm Analysis',
      'MATLAB Programming and Scientific Computing',
      'Object-Oriented Programming',
      'Computer Graphics',
      'Software Engineering'
    ]
  }
]);

</script>

<template>
  <div>
    <el-row>
      <el-col :md="3"/>
      <el-col :md="10">
        <el-anchor :container="containerRef" :offset="70" direction="horizontal">
          <el-anchor-link href="#summary" title="SUMMARY"/>
          <el-anchor-link href="#education" title="EDUCATION"/>
          <el-anchor-link href="#experience" title="EXPERIENCE"/>
          <el-anchor-link href="#technical" title="TECHNICAL SKILLS"/>
          <el-anchor-link href="#cert" title="CERTIFICATIONS"/>
          <el-anchor-link href="#other" title="OTHER CONTRIBUTIONS"/>
        </el-anchor>
      </el-col>
      <el-col :md="10">
      </el-col>
    </el-row>
    <div ref="containerRef" style="margin-top: 20px">
      <el-scrollbar height="86vh">
        <el-row>
          <el-col :md="20" :sm="8" :xs="18">
            <el-row id="summary" class="my-el-row">
              <el-text class="justified-text">Experienced technical
                professional with 8+ years expertise in network engineering, database administration, and full-stack
                development. Proven ability to design secure network architectures, optimize database performance, and
                deliver end-to-end software solutions. Successfully applied machine learning and AI algorithms to solve
                complex distribution database performance optimization problems in SaaS multi-tenant Model, resulting in
                a 9.8% increase in efficiency by thesis analysis.
              </el-text>
            </el-row>
            <el-row class="my-el-row">
              <el-text class="s4" id="education">EDUCATION</el-text>
            </el-row>

            <div v-for="(edu, index) in educations" :key="index">
              <el-row>
                <div>
                  <el-col><span class="h3">{{ edu.institution }}</span><span class="s5">{{ edu.location }}</span>
                    <span class="s6">{{ edu.degree }} <span class="s7">{{ edu.dates }}</span></span>
                  </el-col>
                </div>
                <p class="h4">Courses: <span class="s7">{{ edu.courses.join(', ') }}</span></p>
                <p class="h4" v-if="edu.thesis">Thesis: <i>{{ edu.thesis }}</i></p>
              </el-row>
              <!--              <span class="h3">{{ edu.institution }}<span class="s5">{{ edu.location }}</span></span>-->
              <!--              <p class="s6">{{ edu.degree }} <span class="s7">{{ edu.dates }}</span></p>-->

            </div>

            <el-row class="my-el-row">
              <el-text id="experience" class="s4">EXPERIENCE</el-text>
            </el-row>
            <el-row v-for="(position, index) in positions" :key="index">
              <h3>
                <span>{{ position.title }}</span>
                <span class="h4">{{ position.location }}</span>
                <span class="s6">
                  {{ position.role }}
                  <span class="s7">{{ position.date }}
                  </span>
                </span>
              </h3>
              <ul class="justified-text">
                <li v-for="(responsibility, idx) in position.responsibilities" :key="idx">
                  {{ responsibility }}
                </li>
              </ul>
            </el-row>

            <el-row>
              <el-text class="s4" id="technical">TECHNICAL SKILLS</el-text>
            </el-row>
            <el-row>
              <p class="h3">Programming Languages: <span class="s10">Python, C/C++, SQL, Java, MATLAB, JavaScript/TypeScript, Golang, shell</span>
              </p>
              <p class="h3">Deep Learning Frameworks: <span
                  class="s10">TensorFlow, PyTorch, Keras, Caffe</span>
              </p>
              <p class="h3">Libraries &amp; Tools: <span class="s10">NumPy, Pandas, Scikit-learn, OpenCV, NLTK, Git, Docker, Linux, VUE, etc.</span>
              </p>
            </el-row>
            <el-row>
              <el-text class="s4" id="cert">CERTIFICATIONS</el-text>
            </el-row>

            <el-row>
              <p class="s5">MySQL Oracle Certiﬁed Professional</p>
              <p class="s5">Huawei Certiﬁed Network Professional</p>
              <p class="s5">OceanBase Certiﬁed Assistant</p>
            </el-row>

            <el-row>
              <el-text class="s4" id="other">OTHER CONTRIBUTIONS</el-text>
            </el-row>
            <ul class="justified-text">
              <li>Raised issues for OceanBase and ﬁxed two bugs.</li>
              <li>Spoke as a guest speaker at OceanBase DevCon 2023, sharing tips on using and optimizing distributed
                databases.
              </li>
              <li>Designed and implemented the Pharmaron AI demonstration platform to showcase drug synthesis
                recommendation routes.
              </li>
              <li>Designed and developed the ELN system for electronic laboratory data entry, and integrated it with the
                PubChem API.
              </li>
            </ul>
          </el-col>
          <el-col :md="4" :sm="8" :xs="18"/>
        </el-row>
      </el-scrollbar>
    </div>
    <el-backtop target=".el-scrollbar__wrap" :right="60" :bottom="60">
      <ToTop/>
    </el-backtop>
  </div>
</template>

<style scoped>
h1 {
  font-family: serif;
  font-weight: bold;
  font-size: 24.5pt;
}

.justified-text {
  font-family: serif;
  text-align: justify;
  text-align-last: left; /* 确保最后一行也进行两端对齐 */
  font-weight: normal;
  font-size: 10.5pt;
}

.my-el-row {
  margin-top: 10px;
}

.s1 {
  font-family: serif;
  font-weight: normal;
  font-size: 9pt;
}

.s2 {
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 9pt;
}

a {
  font-family: serif;
  font-weight: normal;
  font-size: 9pt;
}

.s3 {
  font-family: serif;
  font-weight: normal;
  text-decoration: underline;
  font-size: 9pt;
}

.s4 {
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14pt;
}

.p, p {
  font-family: serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h3, h3 {
  font-family: serif;
  font-weight: bold;
  font-size: 11pt;
  margin-left: 20px;
}

.s5 {
  margin-left: 30px;
  font-family: serif;
  font-weight: bold;
  font-size: 10pt;
}

.s6 {
  margin-left: 20px;
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 10pt;
}

.h4, h4 {
  margin-left: 30px;
  font-family: serif;
  font-weight: bold;
  font-size: 10.5pt;
}

.s7 {
  font-family: serif;
  font-style: italic;
  font-weight: normal;
  font-size: 10.5pt;
  text-align: center;
  margin-left: 20px;
}

.s8 {
  font-family: sans-serif;
  font-weight: normal;
  font-size: 10.5pt;
}

.h2, h2 {
  font-family: serif;
  font-weight: bold;
  font-size: 14pt;
}

.s9 {
  font-family: serif;
  font-weight: normal;
  font-size: 11pt;
}

.s10 {
  font-family: serif;
  font-weight: normal;
  font-size: 10pt;
}

</style>
