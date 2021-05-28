<template>
  <div class="message">
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