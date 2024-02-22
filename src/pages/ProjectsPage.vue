<template>
  <q-page class="wrapper">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-xs-12"
        v-for="(data, i) in projects"
        :key="i"
      >
        <ProjectCard class="q-ma-md" :key="i" :project_data="data" />
      </div>

      <!-- <div
        v-for="(value, key) in categorized"
        :key="key"
        :name="key"
        :label="key"
            >
            <ProjectCard
                class="col-4-md"
                v-for="(data, i) in categorized[(key)]"
                :key="i"
                :project_data="data"

                />
      </div> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

import ProjectCard from "components/ProjectCard.vue";
import projectsjson from "assets/json/projects.json";
import categorized from "assets/json/projects_categorized.json";
// import QMenuHover from 'components/QMenuHover.vue'

export default {
  name: "DocumentationPage",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projectsjson,
      categorized: categorized,
    };
  },
  setup() {
    return {
      tab: ref("Service"),
      splitterModel: ref(20),
    };
  },
  mounted() {
    // console.log()
  },
};
</script>
