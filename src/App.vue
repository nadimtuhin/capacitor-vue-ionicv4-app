<template>
  <ion-app>
    <h1>Passing Route Parameters to Component Props</h1>

    <p>Using the User component on a route change:</p>
    <nav class="mainNav" style="border: 5px solid lightgray;">
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing an object to the `to` prop. -->
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'userList' }">User List</router-link>
      <template v-for="user in userList">
        <router-link :to="{name: 'user', params: user}">User {{user.userId}}</router-link>
      </template>
      <router-link :to="{ name: 'named'}">Named Views Demo</router-link>
    </nav>

    <section class="mainBody" style="border: 5px solid darkgray;">
      <router-view></router-view>
    </section>
  </ion-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #apps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
