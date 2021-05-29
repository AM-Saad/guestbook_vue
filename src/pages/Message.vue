<template>
  <div class="message">
    <div v-if="fetched">
      <h1>{{ message.message }}</h1>
      <div class="replies">
        <div class="reply" v-for="reply in message.replies" :key="reply._id">
          {{ reply.message }}
        </div>
      </div>
      <div class="add-reply form-group">
        <input
          class="form-control"
          type="text"
          v-model="replay"
          name="replay"
          id="replay"
          placeholder="Write your replay"
        />
        <button class="btn" @click="addReply(message._id)">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "@/api/messages";
export default {
  name: "Create-Message",
  data() {
    return {
      message: null,
      replay: "",
      fetched: false,
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.getMsg(id);
    }
  },
  methods: {
    async getMsg(id) {
      const res = await Message.message(id);
      if (!res.state) {
        return this.$router.push("/");
      }
      this.message = res.json;
      this.fetched = true;
    },
    async addReply(id) {
      const user = localStorage.getItem("uid");
      if (!user) {
        return this.$router.push("/auth/login");
      }
      if (!this.replay) return;

      const res = await Message.addReply(id, this.replay, user);
      console.log(res);
    },
  },
};
</script>

<style scoped>
.message {
  background: #fff;
  padding: var(--m-padding);
  box-shadow: var(--shadow3);
  margin: var(--m-margin) 0;
}
.message h1 {
  text-align: left;
  margin: var(--m-margin) 0;
}
</style>