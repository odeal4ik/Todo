import { ref, onMounted, watch } from 'vue';

export const useBrowserTitle = () => {
  let initBrowserTitle = sessionStorage.getItem('browserTitle') || 'ToDoList';
  const browserTitle = ref(initBrowserTitle || '');

  const onChangeBrowserTitle = () => {
    const { value } = browserTitle;
    document.title = value;
    sessionStorage.setItem('browserTitle', value);
  };

  onMounted(onChangeBrowserTitle);
  watch(browserTitle, onChangeBrowserTitle);

  return { browserTitle, onChangeBrowserTitle };
};
