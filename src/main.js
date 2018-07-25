// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import App from './App';
import storeDefinition from './store/storeDefinition';
import getRouter from './router/routes';

import User from './components/user.vue';
import Sidebar from './components/sidebar.vue';
import UserList from './components/user-list.vue';
import NamedWrapper from './components/named.vue';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store(storeDefinition);

const router = new VueRouter({
  routes: getRouter({
    UserList, NamedWrapper, User, Sidebar
  })
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  computed: {
    userList() {
      return this.$store.state.userList;
    }
  },
  components: { App },
  template: '<App/>'
});
