'use strict';
import getRouter from './router/routes.js';
import storeDefinition from './store/storeDefinition.js';

const User = httpVueLoader('components/user.vue');
const Sidebar = httpVueLoader('components/sidebar.vue');
const UserList = httpVueLoader('components/user-list.vue');
const NamedWrapper = httpVueLoader('components/named.vue');


Vue.use(Vuex);
const store = new Vuex.Store(storeDefinition);

const router = new VueRouter({
  routes: getRouter({
    UserList, NamedWrapper, User, Sidebar
  })
});


const app = new Vue({
  store: store,
  router: router,
  computed: {
    userList() {
      return this.$store.state.userList;
    }
  }
}).$mount('#app');
