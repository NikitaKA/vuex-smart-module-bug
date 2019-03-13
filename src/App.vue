<template>
  <div id="app"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TestStore from './module';

@Component({
  methods: TestStore.mapMutations(['setTest'])
})
export default class App extends Vue {
  mounted() {
    this.setTest(123);
  }
}
</script>
