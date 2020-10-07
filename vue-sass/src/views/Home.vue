<template>
  <div class="home p-10">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <nav>
        <div>Hello World</div>
      </nav>
      <h1></h1>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
// global css
nav {
  div {
    background: $primary;
  }
}
</style>

<style lang="scss" scoped>
// local css
nav {
  div {
    background: $secondary;
  }
}

// override child css property
.home /deep/ .title {
  font-size: 2em;
  color: blue;
}
</style>
