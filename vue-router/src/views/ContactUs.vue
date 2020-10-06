<template>
    <div>Contact Us</div>

    <!-- <div>foo {{ $route?.params?.foo }}</div>
    <div>bar {{ $route?.params?.bar }}</div> -->


    <div>{{foo}}</div><div>{{bar}}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'


export default class ContactUs extends Vue {

    foo = '';
    bar = '';

  created() {
      console.log(this.$route.params);
        this.foo =  this.$route.params.foo as string;
  }
}
</script>