<template>
    <q-card class="homepage-card text-white" :class="homecard_data.BackgroundColor">
          <q-card-section>
            <div class="text-h6">{{ homecard_data.Title }}</div>
            <div class="text-subtitle2" >{{ homecard_data.Caption }}</div>
          </q-card-section>

          <q-card-section>
            {{ homecard_data.Description }}
          </q-card-section>

          <!-- <q-separator dark></q-separator> -->

          <q-card-actions align="right">
            <router-link
            :to="homecard_data.PageRef">
              <q-btn  v-if="homecard_data.RefType == 'internal'">{{ homecard_data.ButtonText }}</q-btn>
            </router-link>
            <q-btn  v-if="homecard_data.RefType != 'internal'">External</q-btn>
          </q-card-actions>
        </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeCard',
  props: {
    homecard_data:{
        Title: {
        type: String,
        default: 'TEST ENTRY'
        // required: true
        },

        Caption: {
          type: String,
          default: 'something else'
        },

        Description: {
          type: String,
          default: 'test description'
        },

        ButtonText: {
          type: String,
          default: 'TEST ENTRY'
        },

        RefType: {
          type: String,
          default: 'TEST ENTRY'
        },

        PageRef: {
          type: String,
          default: 'TEST ENTRY'
        },

        URL: {
          type: String,
          default: 'TEST ENTRY'
        },
      }
  }
})

</script>

<style lang="sass" scoped>
.homepage-card
  width: 100%
  max-width: 300px
</style>
