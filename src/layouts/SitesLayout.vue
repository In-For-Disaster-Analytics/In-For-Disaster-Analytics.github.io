<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar align="left">
        <q-toolbar-title to="/">
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          <router-link to="/" style="color: white; text-decoration: none ;">
            <!-- <q-icon name="home" />       -->
            REDI Solutions
          </router-link>
          <!-- <img :src="mainbanner" /> -->
        </q-toolbar-title>

        <q-input dense  v-model="text" label="Search" input-class="text-right" class="q-ml-md" >
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search"></q-icon>
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''"></q-icon>
          </template>
        </q-input>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/Philosophy" label="Philosophy" />
        <q-route-tab to="/ConceptModel" label="Concept Model" />
        <q-route-tab to="/Workflow" label="Implementation Workflow" />
        <q-route-tab to="/Projects" label="Project Profiles" />
      </q-tabs> -->

      <q-bar style="min-width: 250px;" class="bg-grey text-white rounded-borders">
        <div class="cursor-pointer non-selectable">
          About <q-icon name="expand_more" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item to="/Philosophy" clickable v-close-popup>
                <q-item-section >Philosophy</q-item-section>
              </q-item>
              <q-item to="/ConceptModel" clickable v-close-popup>
                <q-item-section>Concept Models</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Meet the Team</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div class="cursor-pointer non-selectable">
          REDI Ecosystem <q-icon name="expand_more" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable>
                <q-item-section >Integrated Solutions</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right"></q-icon>
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list dense>
                    <q-item :key="dynamo" clickable>
                      <q-item-section>Dynamo</q-item-section>
                    </q-item>
                    <q-item :key="dolce" clickable>
                      <q-item-section>Dolce</q-item-section>
                    </q-item>
                    <q-item :key="digitalTwins" clickable>
                      <q-item-section>Digital Twins</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable >
                <q-item-section>Data Ecosystem</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right"></q-icon>
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list dense>
                    <q-item>
                      <q-item-section>Dynamo Model Catalog</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>DataX Portal</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Data</q-item-section>
                      <q-item-section side>
                        <q-icon name="keyboard_arrow_right"></q-icon>
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list dense>
                          <q-item>
                            <q-item-section>Data Discovery</q-item-section>
                          </q-item>
                          <q-item>
                            <q-item-section>Data Registration</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable>
                <q-item-section>App Ecosystem</q-item-section>
                <q-item-section side>
                  <q-icon name="keyboard_arrow_right"></q-icon>
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list dense>
                    <q-item>
                      <q-item-section>NNA Sites & Stories</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Dynamo Cookbooks</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Infrastructure Resources</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div class="cursor-pointer non-selectable">
          Projects <q-icon name="expand_more" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>NNA Alaska</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Subsidence</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>SETx KMP</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>RGV AI enabled Modeling</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div class="cursor-pointer non-selectable">
          Test Pages (development) <q-icon name="expand_more" />
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup to="/TestPage">
                <q-item-section>Test Page </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
      </q-bar>







    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar class="flex flex-center q-pa-md">
        <img :src="nsflogo" />
        <q-img
          :src="tacclogo"
          alt="TACC logo"
          contain
          style="max-height: 60px; max-width: 187px"
        ></q-img>
        <img :src="planettexas" style="height: 60px; width: 187px" />
        <!-- <img :src="planettexas" /> -->
        <img :src="microsoftazure" />
      </q-toolbar>
      <!-- <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar> -->
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SitesLayout",

  components: {},

  setup() {
    return {
      mainbanner: "images/alaska-landscape-sm.jpg",
      nsflogo: "images/NSF_Official_logo_High_Res_small.png",
      tacclogo: "images/TACC-100px.png",
      planettexas: "images/100_PT_2050_wordmark_Horiz.png",
      microsoftazure: "images/azure-100px.png",
    };
  },
});
</script>
