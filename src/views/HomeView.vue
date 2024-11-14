<template>
  <div >
    <h1 class="">Esta es una vista protegida</h1>
    <p>Esta vista solo puede verse si ha iniciado sesión y tiene permisos de administrador.</p>
    <button class="btn btn-danger" @click="logout">Cerrar sesion</button>
  </div>
</template>

<script>
import {signOut, auth} from '@/auth'
import {useRouter} from 'vue-router'

export default {
  //orden en que se ejecuta setup--> create ---> mounted
  setup(){
    const router = useRouter()
    const logout = async () => {
      try {
        await signOut(auth)
        router.push('/')
      } catch (error) {
        console.errpr("error al cerrar sesion", error)
      }
    }
    return {
      logout
    }
  }
}
</script>
