<template>
  <div>
    <form
      method="post"
      action="/form"
      class="formSignup none"
      autocomplete="off"
      ref="signup"
      @submit.prevent="signup()"
    >
      <div class="">
        <h3>Sign up</h3>
        <p class="signup-error" style="color: red; margin-top: 10px"></p>

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
        <a class="forgotPassword">
          Already have account
          <b>Login</b>
        </a>
        <input type="submit" value="Sign up" class="btn" />
      </div>
    </form>
    <form
      method="post"
      action="/form"
      class="formLogin none"
      autocomplete="off"
      ref="login"
      @submit.prevent="login()"
    >
      <div class="">
        <h3>Login</h3>
        <p class="login-error" style="color: red; margin-top: 10px"></p>

        <div class="form-group">
          <label for="login-email-client">Email</label>
          <input
            type="email"
            id="login-email-client"
            name="email"
            class="form-control"
            placeholder="Email address"
            autocomplete="false | unknown-autocomplete-value"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="login-password-client">Password</label>
          <input
            type="password"
            id="login-password-client"
            name="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            autocomplete="false | unknown-autocomplete-value"
          />
        </div>
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
import Auth from "@/api/auth";
export default {
  name: "AuthForms",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  created() {
      let authtype = this.$route.params.type
      this.$refs[authtype].classList.add('block')
  },
  methods: {
    async signup() {
      if (!this.name || !this.email || !this.password) {
        return (document.querySelector(".signup-error").innerHTML =
          "Please add your informations ");
      }
      const res = await Auth.signup(this.name, this.email, this.password);
      if (!res.state) {
        return (document.querySelector(".signup-error").innerHTML = res.msg);
      }
    },
    async login() {
      if (!this.email || !this.password) {
        return (document.querySelector(".login-error").innerHTML =
          "Please add your informations ");
      }
      const res = await Auth.login(this.email, this.password);
      if (!res.state) {
        return (document.querySelector(".login-error").innerHTML = res.msg);
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