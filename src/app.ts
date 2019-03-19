import { Component, Vue } from 'vue-property-decorator';
import TestStore from './module';

const Super = Vue.extend({
    methods: TestStore.mapMutations(['setTest', 'setFoo'])
});

@Component
export default class App extends Super {
    mounted() {
        this.setTest('bar');
    }
}
