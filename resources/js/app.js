import './bootstrap';
import { createApp } from 'vue';




const app = createApp({});

import TodoComponent from './components/TodoComponent.vue';
app.component('todo-component', TodoComponent);

import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)

app.mount('#app');



