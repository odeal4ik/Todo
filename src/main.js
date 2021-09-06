import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Field, Col, Row, Button, Checkbox, CheckboxGroup } from 'vant';
import 'vant/lib/index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(Col)
  .use(Row)
  .use(Field)
  .use(Button)
  .use(Checkbox)
  .use(CheckboxGroup)
  .mount('#app');
