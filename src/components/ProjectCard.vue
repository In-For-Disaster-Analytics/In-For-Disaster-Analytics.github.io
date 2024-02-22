<template>
    <q-card flat bordered class="project-card" >
      <q-item class="project-card-header" :class="project_data.Type">
        <q-item-section v-if="project_data.Icon"  avatar>
          <q-icon :name="(project_data.Icon)" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h4 secondary" >{{ project_data.Name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="row">

        <div class="text-subtitle1 col-sm-6">
          {{ project_data.Acronym }}
        </div>
        <div class="text-subtitle1 col-sm-6">
          <q-markdown v-if="project_data.URL" class="project-link" text-right align="right"> [Visit Project]({{ project_data.URL }})</q-markdown>
        </div>

      </q-item>

      <q-separator />
      <q-item class="project-description">
        <div class="test-class q-ma-md items-start">
          <q-markdown class="description-section">{{ project_data.Description }}</q-markdown>
          <q-markdown v-if="project_data.Message">{{ project_data.Message }}</q-markdown>

        </div>
    </q-item>
      <q-separator />

      <q-item class="">
        <q-item-section class="test-class q-ma-md ">
          <p v-if="project_data.Type"><span class="text-weight-bold">Type: </span>{{ project_data.Type }}</p>
          <p v-if="project_data.Audience"><span class="text-weight-bold">Audience: </span>{{ project_data.Audience }}</p>
          <p v-if="project_data.Github_Repo"><span class="text-weight-bold">Github Link: </span>{{ project_data.Github_Repo }}</p>
            <!-- <q-markdown v-if="project_data.URL" class="project-link" text-right align="right"> [Visit Project]({{ project_data.URL }})</q-markdown> -->
        </q-item-section>
    </q-item>

    </q-card>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project_data:{
        Name: {
        type: String,
        default: 'TEST ENTRY'
        // required: true
        },

        Acronym: {
          type: String,
          default: 'TEST ENTRY'
        },

        Type: {
          type: String,
          default: 'TEST ENTRY'
        },

        Audience: {
          type: String,
          default: 'TEST ENTRY'
        },

        Description: {
          type: String,
          default: 'test description'
        },

        Icon: {
          type: String,
          default: 'TEST ENTRY'
        },

        URL: {
          type: String,
          default: 'TEST ENTRY'
        },

        Github_Repo: {
          type: String,
          default: 'TEST ENTRY'
        },
      }
  }
})

</script>

<style lang="sass" scoped>
.project-card
    border-radius: 25px



.project-card-header

.project-description
  min-height: 200px
</style>
