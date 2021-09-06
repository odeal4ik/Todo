<template>
  <div>
    <InputForBrowserTitle />
    <ToDoList />
  </div>
</template>

<script>
import InputForBrowserTitle from '@/components/InputForBrowserTitle/InputForBrowserTitle.vue';
import ToDoList from '@/components/ToDoList/ToDoList.vue';

export default {
  name: 'Home',
  components: {
    InputForBrowserTitle,
    ToDoList,
  },
};
</script>
