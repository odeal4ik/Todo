<template>
  <van-button
    icon="plus"
    type="primary"
    color="#00AEC7"
    loading-text="Добавляю..."
    :loading="isLoading"
    @click="onAddToDoItem"
    >Добавить задачу</van-button
  >
</template>

<script>
export const NAME = 'ToDoAddButton';

export default {
  name: NAME,
  props: {
    isLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
    onAddToDoItem: {
      type: Function,
      default: () => {},
      required: true,
    },
  },
};
</script>
