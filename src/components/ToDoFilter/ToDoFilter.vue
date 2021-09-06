<template>
  <div class="todos-list__filter">
    <van-field v-model="filterTitle" label="По названию задачи" label-width="12.5em" />
    <van-checkbox v-model="allChecked">Завершенные</van-checkbox>
  </div>
</template>

<script>
export const NAME = 'ToDoFilter';

export default {
  name: NAME,
  data() {
    return {
      allChecked: Boolean(JSON.parse(sessionStorage.getItem('allChecked'))) || false,
      filterTitle: String(JSON.parse(sessionStorage.getItem('filterTitle')) || ''),
    };
  },
  watch: {
    allChecked(val) {
      sessionStorage.setItem('allChecked', JSON.stringify(val));
      this.$emit('onChangeAllChecked', val);
    },

    filterTitle(val) {
      sessionStorage.setItem('filterTitle', JSON.stringify(val));
      this.$emit('onChangeFilterTitle', val);
    },
  },

  mounted() {
    if (sessionStorage.getItem('allChecked'))
      this.$emit('onChangeAllChecked', Boolean(JSON.parse(sessionStorage.getItem('allChecked'))));
    if (sessionStorage.getItem('filterTitle'))
      this.$emit('onChangeFilterTitle', String(JSON.parse(sessionStorage.getItem('filterTitle'))));
  },
};
</script>

<style lang="scss" scoped>
.todos-list__filter {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .van-field {
    box-shadow: 4px 4px 20px 0px rgba($color: #5f5f5f, $alpha: 0.5);
    margin-right: 16px;
    flex-basis: 65%;
  }

  .van-checkbox {
    flex-basis: 30%;
  }
}
</style>
