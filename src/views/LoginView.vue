<script>
import {signInWithEmailAndPassword, auth} from '@/auth'
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn(){
      try {
        const {email, password} = this
        const {user} = await signInWithEmailAndPassword(auth,email, password)
        alert('Usuario logueado')
        console.log('Usuario logueado' , user)
      } catch (error) {
        console.error('Error en las  credenciales', error)
        
      }
    }
  }
}
</script>

<template>
  <div class="container border p-4 mt-4 bg-light">
    <h1>Iniciar  sesion</h1>
    <input class="form-control mt-3" type="text" placeholder="Email" v-model="email">
    <input class="form-control mt-3" type="password" placeholder="Password" v-model="password">
    <button class="btn btn-success mt-3" @click="signIn">Iniciar sesion</button>
  </div>
</template>
