import { ref, computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

import { MODULE_NAME as TODOS_MODULE } from '@/store/modules/Todos';
import { map as todosMutationsMap } from '@/store/modules/Todos/mutations';

export const useToDoList = () => {
  const store = useStore();
  let isLoading = ref(false);
  let checkedFilter = ref(false);
  let filterTitle = ref('');
  let initTodoListMap = JSON.parse(sessionStorage.getItem('toDoListMap'));
  let toDoListMap = computed(() =>
    store.state.todos.todoList.filter((t) => {
      if (filterTitle.value) return t.title.toLowerCase().indexOf(filterTitle.value.toLowerCase()) !== -1;
      else return true;
    })
  );

  const fillStateFromSession = () => {
    if (store.state.todos.todoList.length === 0 && initTodoListMap)
      store.commit(`${TODOS_MODULE}/${todosMutationsMap.ADD_TODO_ITEMS}`, initTodoListMap._value);
  };

  const onAddToDoItem = () => {
    isLoading.value = true;
    store.commit(`${TODOS_MODULE}/${todosMutationsMap.ADD_TODO_ITEM}`, {
      id: toDoListMap.value[toDoListMap.value.length - 1]?.id + 1 || 0 + 1,
      checked: false,
      title: '',
      descr: '',
      children: [],
    });
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  };

  const onDeleteToDoItem = (item) => {
    store.commit(`${TODOS_MODULE}/${todosMutationsMap.DELETE_TODO_ITEM_CHILD}`, { item });
  };

  const onAddChildToDoItem = (item) => {
    store.commit(`${TODOS_MODULE}/${todosMutationsMap.ADD_TODO_ITEM_CHILD}`, {
      item,
      adding: {
        id: item.children.length + 1,
        checked: false,
        title: '',
        descr: '',
        children: [],
      },
    });
  };

  const saveToDoListToStorage = () => {
    if (filterTitle.value) return;
    sessionStorage.setItem('toDoListMap', JSON.stringify(toDoListMap));
  };

  const onChangeAllChecked = (value) => {
    sessionStorage.setItem('allChecked', JSON.stringify(value));
    checkedFilter.value = value;
  };

  const onChangeFilterTitle = (value) => {
    filterTitle.value = value;
  };

  watch(toDoListMap, saveToDoListToStorage, { deep: true });

  onMounted(fillStateFromSession);

  return {
    toDoListMap,
    isLoading,
    checkedFilter,
    filterTitle,
    onAddToDoItem,
    onAddChildToDoItem,
    onDeleteToDoItem,
    onChangeAllChecked,
    onChangeFilterTitle,
  };
};
