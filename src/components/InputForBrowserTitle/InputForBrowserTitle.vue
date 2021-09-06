<template>
  <div class="input-for-browser-title">
    <van-row>
      <van-col offset="4" span="16">
        <van-field v-model="browserTitle" :placeholder="browserTitle" label="Название списка" label-width="12.5em" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { useBrowserTitle } from '@/hooks/useBrowserTitle';
export const NAME = 'InputForBrowserTitle';

export default {
  name: NAME,
  setup() {
    const { browserTitle, onChangeBrowserTitle } = useBrowserTitle();
    return { browserTitle, onChangeBrowserTitle };
  },
};
</script>

<style lang="scss" scoped>
.van-field {
  margin: 16px auto;
  box-shadow: 4px 4px 20px 0px rgba($color: #5f5f5f, $alpha: 0.5);
  border-radius: 4px;
}
</style>
