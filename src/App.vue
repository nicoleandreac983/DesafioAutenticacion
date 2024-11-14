<template>
  <div>
    <router-link to="/">Login</router-link>
    <router-link to="/signup">Sign UP</router-link>
    <router-link to="/home" v-if="isAuthenticated">Home</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import {onAuthStateChanged, auth} from '@/auth';
  export default {
    name: 'App',
    data() {
      return {
        isAuthenticated: false
      }
    },
    created() {
      onAuthStateChanged(auth, (user) => {
        this.isAuthenticated = !!user
        
      })
    }
  }
</script>
