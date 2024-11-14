<script>
import {createUserWithEmailAndPassword, auth} from "@/auth"

export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    async register(){
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user= userCredentials.user
        console.log("usuario creado", user)
        
      } catch (error) {
        console.error("Error: " , error)
        
      }
    }

  }
}

</script>

<template>
  <div class="container border p-4 mt-4 bg-light"  >
    <h3>Registrate</h3>

    <input class="form-control mt-3" type="text" placeholder="Email" v-model="email">
    <input class="form-control mt-3" type="password" placeholder="Password" v-model="password">
    <button class="btn btn-success mt-3" @click="register">Registrar</button>
  </div>
</template>

<style scoped>

</style>