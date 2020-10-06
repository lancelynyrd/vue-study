<template>
  <h1>{{ title }}</h1>
  <div id="nav">
    <!-- <router-link to="path">Page<router-link> tag is used similar to <a href="path">Page</a> -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact-us">Contact Us</router-link> |
    <router-link to="/user/123">User</router-link>
  </div>

  <!-- this is the tag where the matching route will be mounted -->
  <router-view />

  <!-- <router-view class="view one"></router-view>
  <router-view class="view two" name="left"></router-view>
  <router-view class="view three" name="right"></router-view> -->

  <!-- To check the content of the $route -->
  <!-- <pre>{{ JSON.stringify($route, null, 2) }}</pre> -->
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  /**
   * to watch the change from $route when ever the page changes.
   */
  watch: {
    $route(to, from) {
      console.log(to.path, "<=", from.path);
    }
  }
})
export default class App extends Vue {
  title = "Vue Router";
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
