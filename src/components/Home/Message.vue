<template>
  <div class="message p-medium m-medium">
    {{ message.message }}
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["message"],
};
</script>
 
<style>
</style>