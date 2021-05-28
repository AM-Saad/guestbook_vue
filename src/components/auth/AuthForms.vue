<template>
  <div>
    <form
      method="post"
      action="/form"
      class="formSignup "
      autocomplete="off"
    >
      <div class="">
        <h3>Sign up</h3>
        <input
          type="text"
          id="name-client"
          name="name"
          placeholder="Name"
          autocomplete="off"
          v-model="name"
        />
        <input
          type="email"
          id="email-client"
          name="email"
          placeholder="Email address"
          autocomplete="false | unknown-autocomplete-value"
          v-model="email"
        />
        <input
          type="password"
          id="password-client"
          name="password"
          placeholder="Password"
          v-model="password"
          autocomplete="false | unknown-autocomplete-value"
        />
        <p class="signup-error" style="color: red; margin-top: 10px"></p>
        <a class="forgotPassword">
          Already have account
          <b>Login</b>
        </a>
        <input type="submit" value="Sign up" class="loginBtn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForms",
  data() {
    return {
        name:'',
        email:'',
        password:''
    };
  },
};
</script>

<style>
</style>