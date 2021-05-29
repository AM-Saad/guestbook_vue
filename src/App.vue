<template>
  <div id="app" class="wrapper">
    <div id="nav" class="flex">
      <router-link to="/">Home</router-link>
      <router-link v-if="!authenticated" to="/auth/signup"
        >Register</router-link
      >
      <router-link v-if="!authenticated" to="/auth/login">Login</router-link>
      <router-link v-if="authenticated" to="/message/new"
        >New Message</router-link
      >
    </div>
    <router-view v-on:checkAuth="checkAuthentication" :auth="authenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
    };
  },
  components: {},
  created() {
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      let uid = localStorage.getItem("uid");
      if (uid) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.wrapper {
  width: 70%;
  margin: auto;
  display: block;
}
a{
  text-decoration: none;
}
a:visited{
  color: #000;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: var(--s-margin);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media only screen and (max-width: 767px) and (min-width: 320px) {
  .wrapper{
    width: 95%;
  }
}
</style>
