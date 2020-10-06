<template>
  <div class="user">
    <h1>{{ $route.params.id }}</h1>

    <div>
      <router-link to="/user/123">User</router-link> |
      <router-link to="/user/123/profile">Profile</router-link> |
      <router-link to="/user/123/posts">Posts</router-link>
    </div>
    <div>
      <button @click="gotoUserPage('/user/123')">User</button> |
      <button @click="gotoUserPage('/user/123/profile')">profile</button> |
      <button @click="gotoUserPage('/user/123/posts')">posts</button> |

      <button @click="gotoUserPage('user')">user</button>
    </div>

    <!-- This is the same as this.$router.push({ name: 'user', params: { name: 'hi' }}); 
    But some how produces Error -->
    <hr />
    <div>
      <router-link to="{ name: 'user', params: { name: 'hi' }}"
        >navigate with name</router-link
      >
    </div>
    <hr />
    <div>
      Navigate through history
      <button @click="$router.go(1)">1</button> |
      <button @click="$router.go(-2)">-2</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({
  methods: {}
})
export default class User extends Vue {
  gotoUserPage(path: string) {
    this.$router.push({ path: path }); // push to history
    // this.$router.replace({ path: path})   // navigate without history entry
  }
}
</script>
