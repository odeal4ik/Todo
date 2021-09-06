<template>
  <div class="todos-list__item-wrapper list-complete-item">
    <div class="todos-list__item" v-if="isItemShown">
      <van-checkbox v-model="computedItem.checked">{{ computedItem.id }}</van-checkbox>
      <div class="todos-list__item-content">
        <van-field
          v-model="computedItem.title"
          class="title"
          label="Название задачи"
          label-width="12.5em"
          :placeholder="computedItem.title"
          :class="{ checked: item.checked }"
          :disabled="item.checked"
        />
        <van-field
          v-model="computedItem.descr"
          type="textarea"
          rows="1"
          autosize
          :class="{ checked: item.checked }"
          :disabled="item.checked"
        />
      </div>
      <van-button icon="plus" type="primary" size="mini" @click="onAddChildToDoItem(computedItem)" />
      <van-button icon="delete-o" type="warning" size="mini" @click="onDeleteToDoItem(computedItem)" />
    </div>
    <TransitionGroup name="list-complete" v-if="isItemShown">
      <div class="todos-list__item-child list-complete-item" v-for="(child, index) in item.children" :key="index">
        <van-col span="22">
          <to-do-item
            :item="child"
            :onAddChildToDoItem="onAddChildToDoItem"
            :onDeleteToDoItem="onDeleteToDoItem"
            :checkedFilter="checkedFilter"
          />
        </van-col>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import '@/assets/styles/animation.css';

export const NAME = 'ToDoItem';

export default {
  name: NAME,
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    onAddChildToDoItem: {
      type: Function,
      default: () => {},
    },
    onDeleteToDoItem: {
      type: Function,
      default: () => {},
    },
    checkedFilter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedItem() {
      return this.item;
    },

    isItemShown() {
      if (!this.checkedFilter) return true;
      if (this.item.checked) return true;
      return false;
    },
  },

  methods: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
.todos-list__item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;

  &-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &-content {
    flex-basis: 75%;

    & > .title {
      margin-bottom: 8px;
    }
  }

  .van-checkbox {
    flex-basis: 10%;
  }

  .van-field {
    box-shadow: 4px 4px 20px 0px rgba($color: #5f5f5f, $alpha: 0.5);
    border-radius: 4px;
    margin-right: 16px;

    &.checked {
      text-decoration: line-through;
    }
  }
}
</style>
