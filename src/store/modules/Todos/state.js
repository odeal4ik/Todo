export const map = {
  TODO_LIST: 'todoList',
};

export default function initialState() {
  return {
    [map.TODO_LIST]: [],
  };
}
