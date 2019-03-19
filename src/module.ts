import { Mutations, Module } from 'vuex-smart-module';

class TestState {
    test: boolean = true;
    foo: string = '';
}

class TestMutations extends Mutations<TestState> {
    setTest(value: boolean) {
        this.state.test = value;
    }

    setFoo(value: string) {
        this.state.foo = value;
    }
}

export default new Module({
    namespaced: true,
    state: TestState,
    mutations: TestMutations
});
