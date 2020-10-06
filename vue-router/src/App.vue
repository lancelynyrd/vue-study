<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contact-us">Contact Us</router-link> |
    <router-link to="/user/123">User</router-link>|
  </div>
  <router-view />
<!-- 
  <router-view class="view one"></router-view>
  <router-view class="view two" name="left"></router-view>
  <router-view class="view three" name="right"></router-view> -->

  <!-- <pre>{{ JSON.stringify($route, null, 2) }}</pre> -->
</template>


<script lang="ts">
import { watch } from 'vue';
import { Vue, Options } from 'vue-class-component';

@Options({
    watch: {
    $route(to, from) {
      console.log(to.path, '<=', from.path);
      }
    }
})
export default class App extends Vue {
  hello = 12344;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
