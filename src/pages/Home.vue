<template>
  <div>
    <Message v-for="message in messages" :key="message._id" :messsage="message"></Message>
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
  components: { Message },
  async created() {
    const res = await MessageApi.messages();
    if (res) {
      this.messages = res;
    }
  },
};
</script>

<style>
</style>