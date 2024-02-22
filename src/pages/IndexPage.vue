<template>
  <q-page class="flex flex-center landing"  >

    <q-section class="row">
      <div class="row align-items-center site-header" >
          REDI Solutions <br/> Facilitating Data Services and Decision Support Systems
      </div>
    </q-section>

    <q-section class="row">
      <div
          class="col-lg-4 col-md-6 col-xs-12"
          v-for="(data, i) in homepagecards"
          :key="i"
        >
        <HomeCard class="q-ma-md" :key="i" :homecard_data="data" />
      </div>
    </q-section>

  </q-page>
  </template>

<script>
import { ref } from "vue";

import HomeCard from "components/HomeCard.vue";
import homepagecardsjson from "assets/json/homepageCards.json";


export default {
  name: "IndexPage",
  components: {
    HomeCard,
  },
  data() {
    return {
      homepagecards: homepagecardsjson,
    };
  },
  setup() {
    return {
      tab: ref("Service"),
      splitterModel: ref(20),
    };
  },
};
</script>

<style lang="sass" scoped>
.landing
  background-image: url('images/home_landing.png')



.site-header
  text-shadow: 1px 1px darkgrey
  font-weight: bolder
  font-size:38px
  color: #000
</style>
