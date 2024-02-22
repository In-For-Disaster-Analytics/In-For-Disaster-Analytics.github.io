<template>
  <q-page class="flex flex-center">
    <div>Concept Model Text goes in here</div>
    <div>
      <q-markdown
        src=":::
Put your markdown here Classic markup: :wink: :joy: :cry: :angel:
:heart: :beers: :laughing: :yum: Shortcuts (emoticons): :-) :-( 8-) ;)
:::"
      ></q-markdown>
      <q-markdown
        src=":::
This is a **test** of markdown
:::"
      ></q-markdown>
      <q-markdown :src="markdown" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import tester from "assets/markdowns/test_markdown.md";

export default {
  name: "ConceptModelPage",
  components: {},
  data() {
    return {
      markdown: tester,
    };
  },
};
</script>
