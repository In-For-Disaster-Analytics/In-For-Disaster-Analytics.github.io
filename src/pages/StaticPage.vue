<template>
  <q-page class="flex flex-center">
    <q-list>
        <q-item>
          Movie Player
        </q-item>
    </q-list>
    <div>
      Add Static
    </div>

    <div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md">
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        ></q-video>
      </div>
</div>
  </q-page>




</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data () {
    return {
      // homecard:{
      //   title:'Title',
      //   description:'Description'
      // },
      // video: {
      //   label: 'Tears of Steel',
      //   poster: 'media/TearsOfSteel/TearsOfSteel.jpeg',
      //   sources: [
      //     {
      //       src: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov',
      //       type: 'video/mp4'
      //     }
      //   ],
      //   tracks: [
      //     {
      //       src: 'media/TearsOfSteel/TOS-en.vtt',
      //       kind: 'subtitles',
      //       srclang: 'en',
      //       label: 'English'
      //     },
      //     {
      //       src: 'media/TearsOfSteel/TOS-de.vtt',
      //       kind: 'subtitles',
      //       srclang: 'de',
      //       label: 'German'
      //     },
      //     {
      //       src: 'media/TearsOfSteel/TOS-es.vtt',
      //       kind: 'subtitles',
      //       srclang: 'es',
      //       label: 'Spanish'
      //     },
      //     {
      //       src: 'media/TearsOfSteel/TOS-fr-Goofy.vtt',
      //       kind: 'subtitles',
      //       srclang: 'fr',
      //       label: 'French'
      //     },
      //     {
      //       src: 'media/TearsOfSteel/TOS-it.vtt',
      //       kind: 'subtitles',
      //       srclang: 'it',
      //       label: 'Italian'
      //     },
      //     {
      //       src: 'media/TearsOfSteel/TOS-nl.vtt',
      //       kind: 'subtitles',
      //       srclang: 'nl',
      //       label: 'Dutch'
      //     }
      //   ]
      // }
    }
}


});
</script>
