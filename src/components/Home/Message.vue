<template>
  <div class="message p-medium m-medium flex f-space-between">
    {{ message.message }}
    <div class="flex" v-if="creator">
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-info">Edit</button>
    </div>
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
  methods: {
    
  },
};
</script>
 
<style scoped>
.btn{
  width: unset;
}
</style>