import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module';
import TestStore from './module';

Vue.use(Vuex);

export default createStore(
  new Module({
    modules: {
      test: TestStore
    }
  })
);
