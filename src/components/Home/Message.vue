<template>
  <div class="message p-medium m-medium flex f-space-between">
    {{ message.message }}
    <div class="flex" v-if="creator">
      <button
        class="btn btn-danger"
        @click="deleteMsg(message._id, message.user)"
      >
        Delete
      </button>
      <router-link :to="{ path: '/message/edit', query: { id: message._id }}" class="btn btn-info"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script>
import Message from "@/api/messages";
export default {
  name: "Message",
  data() {
    return {
      creator: false,
    };
  },
  props: ["message"],
  created() {
    const uid = localStorage.getItem("uid");
    if (this.message.user === uid) {
      this.creator = true;
    }
  },
  methods: {
    async deleteMsg(id, user) {
      const res = await Message.deleteMessage(id, user);
      if (!res.state) {
        this.$emit("error", res.msg);
      }
      this.$emit("deleteMsg", id);
    },
  },
};
</script>
 
<style scoped>
.btn {
  width: unset;
}
</style>