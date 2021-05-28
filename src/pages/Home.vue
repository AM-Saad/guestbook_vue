<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
import Message from "@/components/Home/Message.vue";
import MessageApi from "@/api/messages";
export default {
  name: "Home",
  data() {
    return {
      messages: [],
    };
  },
  components: [Message],
  created(){

  }
};
</script>

<style>
</style>