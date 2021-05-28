<template>
  <div>
    <form
      method="post"
      action="/newmessage"
      autocomplete="off"
      @submit.prevent="create()"
    >
      <div class="">
        <h3>Create New Message</h3>
        <p class="error" style="color: red; margin-top: 10px"></p>

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

        <input type="submit" value="Create" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
        message:''
    };
  },
  methods:{
      create(){
      }
  }
};
</script>

<style>
</style>