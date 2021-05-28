<template>
  <div class="message p-medium m-medium">
    {{ message.message }}
  </div>
</template>

<script>
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
};
</script>
 
<style>
</style>