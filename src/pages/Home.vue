<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import "@/api/messages";
export default {
  name: "Home",
  data() {
    return {
      messages: [],
    };
  },
  components: [Message],
};
</script>

<style>
</style>