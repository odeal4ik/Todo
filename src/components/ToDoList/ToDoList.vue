<template>
  <div class="todos-list">
    <van-row justify="center">
      <van-col span="16" class="todos-list__controls">
        <ToDoFilter @onChangeAllChecked="onChangeAllChecked" @onChangeFilterTitle="onChangeFilterTitle" />
      </van-col>
      <van-col span="16" class="todos-list__controls">
        <ToDoAddButton :isLoading="isLoading" :onAddToDoItem="onAddToDoItem" />
      </van-col>
    </van-row>
    <van-col span="16" offset="4" v-if="toDoListMap?.length > 0">
      <TransitionGroup name="list-complete" tag="div">
        <ToDoItem
          v-for="(item, index) in toDoListMap"
          :item="item"
          :onAddChildToDoItem="onAddChildToDoItem"
          :onDeleteToDoItem="onDeleteToDoItem"
          :checkedFilter="checkedFilter"
          :key="index"
        />
      </TransitionGroup>
    </van-col>
    <van-row justify="center" v-else> Cписок задач пуст </van-row>
  </div>
</template>

<script>
import '@/assets/styles/animation.css';

import ToDoItem from '@/components/ToDoItem/ToDoItem.vue';
import ToDoFilter from '@/components/ToDoFilter/ToDoFilter.vue';
import ToDoAddButton from '@/components/ToDoAddButton/ToDoAddButton.vue';

import { useToDoList } from '@/hooks/useToDoList';

export const NAME = 'ToDoList';

export default {
  name: NAME,
  components: { ToDoAddButton, ToDoItem, ToDoFilter },
  setup() {
    const {
      toDoListMap,
      isLoading,
      checkedFilter,
      filterTitle,
      onAddToDoItem,
      onAddChildToDoItem,
      onDeleteToDoItem,
      onChangeAllChecked,
      onChangeFilterTitle,
    } = useToDoList();

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
  },
};
</script>

<style lang="scss" scoped>
.todos-list__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
