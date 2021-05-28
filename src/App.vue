<template>
  <div id="app" class="wrapper">
    <div id="nav" class="flex">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth/signup">Register</router-link> |
      <router-link to="/auth/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created(){
    this.checkAuthentication()
  },
  methods:{
    checkAuthentication(){
      let uid = localStorage.getItem('uid')
      console.log(uid);
      if(uid){
        console.log('auth');
      }
    }
  }
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
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: var(--s-margin);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
