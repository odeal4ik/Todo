export const map = {
  ADD_TODO_ITEM: 'ADD_TODO_ITEM',
  ADD_TODO_ITEMS: 'ADD_TODO_ITEMS',
  ADD_TODO_ITEM_CHILD: 'ADD_TODO_ITEM_CHILD',
  DELETE_TODO_ITEM_CHILD: 'DELETE_TODO_ITEM_CHILD',
};

const lookForNestedChildren = (child, item) => {
  if (!child.children && child.children.length < 1) return;
  else {
    console.log(child);
    if (child.children.includes(item)) child.children = child.children.filter((c) => c.id !== item.id);
    else child.children.forEach((c) => lookForNestedChildren(c, item));
  }
};

export default {
  [map.ADD_TODO_ITEM](state, payload) {
    state.todoList = [...state.todoList, payload];
  },

  [map.ADD_TODO_ITEMS](state, payload) {
    state.todoList = payload;
  },

  [map.ADD_TODO_ITEM_CHILD](state, { item, adding }) {
    item.children = [...item.children, adding];
  },

  [map.DELETE_TODO_ITEM_CHILD](state, { item }) {
    if (state.todoList.includes(item)) state.todoList = state.todoList.filter((t) => t.id !== item.id);
    else state.todoList.forEach((child) => lookForNestedChildren(child, item));
  },
};
