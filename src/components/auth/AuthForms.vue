<template>
  <div>
    <form
      method="post"
      action="/form"
      class="formSignup"
      autocomplete="off"
      @submit.prevent="signup()"
    >
      <div class="">
        <h3>Sign up</h3>
        <div class="form-group">
          <label for="name-client">Name</label>
          <input
            type="text"
            id="name-client"
            name="name"
            class="form-control"
            placeholder="Name"
            autocomplete="off"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="email-client">Email</label>
          <input
            type="email"
            id="email-client"
            name="email"
            class="form-control"
            placeholder="Email address"
            autocomplete="false | unknown-autocomplete-value"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="password-client">Password</label>
          <input
            type="password"
            id="password-client"
            name="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            autocomplete="false | unknown-autocomplete-value"
          />
        </div>
        <p class="signup-error" style="color: red; margin-top: 10px"></p>
        <a class="forgotPassword">
          Already have account
          <b>Login</b>
        </a>
        <input type="submit" value="Sign up" class="btn" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AuthForms",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      if (!this.name || !this.email || !this.password) {
        return (document.querySelector(".signup-error").innerHTML =
          "Please add your informations ");
      }
    },
  },
};
</script>

<style>
form {
  background-color: #fff;
  padding: var(--m-padding);
  box-shadow: var(--shadow3);
  text-align: left;
  margin: var(--l-margin) 0;
}
</style>