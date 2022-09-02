import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './action.js';
import rootGetters from './getters.js';

const store = createStore({
    modules: {
      
    },
    state() {
      return {
        
      };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
  });
  
  export default store;