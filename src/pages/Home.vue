<template>
  <div class="wrapper">
    <Message v-for="message in messages" :key="message._id" :message="message"></Message>
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
.wrapper{
  width: 70%;
  margin: auto;
  display: block;
}
.message{
  background-color: #fff;
  height: 100px;
  font-size: 22px;
  line-height: 100px;
}
</style>