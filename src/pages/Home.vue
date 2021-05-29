<template>
  <div class="messages">
    <h1>Guest Book</h1>
    <p class="error c-r f-left font-xl m-medium" v-if="errMsg">{{ errMsg }}</p>
    <Message
      v-for="message in messages"
      :key="message._id"
      :message="message"
      v-on:error="error"
      v-on:deleteMsg="deleteMsg"
    ></Message>
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
      errMsg: "",
    };
  },
  
  components: { Message },
  async created() {
    this.$emit("checkAuth");
    const res = await MessageApi.messages();
    if (res) {
      this.messages = res;
    }
  },
  methods: {
    error(msg) {
      this.errMsg = msg;
    },
    deleteMsg(id) {
      this.messages = this.messages.filter(
        (m) => m._id.toString() != id.toString()
      );
    },
  },
};
</script>

<style scoped>
.message {
  background-color: #fff;
  height: 100px;
  font-size: 22px;
  line-height: 100px;
  text-align: left;
  border-radius: var(--s-radius);
  box-shadow: var(--shadow3);
}
</style>