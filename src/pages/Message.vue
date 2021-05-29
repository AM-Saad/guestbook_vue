<template>
  <div>
    <h1>{{ message.message }}</h1>
    <div class="replies">
      <div class="reply" v-for="reply in message.replies" :key="reply._id">
        {{ reply.message }}
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
      console.log(res);
      if (!res.state) {
        return this.$router.push("/");
      }
      this.message = res;
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>