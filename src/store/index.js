import { createStore } from 'vuex';

import todos from './modules/Todos';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todos: todos(),
  },
});
