import { Mutations, Module } from 'vuex-smart-module';

class TestState {
    test: boolean = true;
}

class TestMutations extends Mutations<TestState> {
    setTest(value: boolean) {
        this.state.test = value;
    }
}

export default new Module({
    namespaced: true,
    state: TestState,
    mutations: TestMutations
});
