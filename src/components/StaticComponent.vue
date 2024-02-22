<template>
    <q-card flat bordered class="homepage-card" >

      <q-item class="row">
        <div class="text-subtitle1 col-sm-6">
          {{ static_data.Title }}
        </div>
      </q-item>

      <q-separator />

      <q-item>
        <div class="test-class q-ma-md items-start">
          Description
        </div>
      </q-item>

      <q-separator />

      <q-item class="">
        <q-item-section class="test-class q-ma-md ">
            Add button here
        </q-item-section>
    </q-item>

    </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StaticComponent',
  props: {
    static_data:{
        Title: {
        type: String,
        default: 'TEST ENTRY'
        // required: true
        },

        Description: {
          type: String,
          default: 'test description'
        },
      }
  }
})

</script>

<style lang="sass" scoped>

</style>
