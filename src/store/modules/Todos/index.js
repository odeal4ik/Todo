import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

export const MODULE_NAME = 'todos';

export default function createModule() {
  return {
    name: MODULE_NAME,
    namespaced: true,
    state: state(),
    actions,
    mutations,
    getters,
  };
}
