<template>
  <div>
    <form
      method="post"
      action="/newmessage"
      autocomplete="off"
      @submit.prevent="create()"
    >
      <div class="">
        <h3 v-if="!edit">Create New Message</h3>
        <h3 v-if="edit">Edit Message</h3>
        <p class="error" style="color: red; margin-top: 10px"></p>
        <p class="success" style="color: green; margin-top: 10px"></p>

        <div class="form-group">
          <label for="message">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            class="form-control"
            placeholder="Write your message.."
            autocomplete="off"
            v-model="message"
          />
        </div>

        <input type="submit" v-if="edit" value="Edit" class="btn" />
        <input type="submit" v-if="!edit" value="Create" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
import Message from "@/api/messages";
export default {
  name: "Message",
  data() {
    return {
      message: "",
      edit: false,
      user: null,
    };
  },
  created() {
    const type = this.$route.params.type;
    if (type == "edit") {
      const id = this.$route.query.id;
      this.edit = true;
      if (id) {
        this.getMsg(id);
      }
    }
  },
  methods: {
    async getMsg(id) {
      const res = await Message.message(id);
      this.message = res.message;
      this.user = res.user;
    },
    async create() {
      if (!this.message) {
        return (document.querySelector(".error").innerHTML =
          "Please write your message");
      }
      const user = localStorage.getItem("uid");
      if (!user) {
        return this.$router.push("/auth/login");
      }
      const res = await Message.newMessage(this.message, user);
      if (!res.state) {
        return (document.querySelector(".error").innerHTML = res.msg);
      }
      this.message = "";
      return (document.querySelector(".success").innerHTML =
        "Your message created successfully");
    },
  },
  watch: {},
};
</script>

<style scoped>
form {
  padding: var(--l-padding);
  background: #fff;
  margin: var(--l-margin);
  text-align: left;
}
</style>