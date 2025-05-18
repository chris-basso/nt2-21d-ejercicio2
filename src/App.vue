<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <header class="card-header">
        <h1>Alumnos</h1>
      </header>

      <main class="card-body">
      
        <Formulario/>
        

      </main>
    </div>
  </div>
</template>
<script>

import Formulario from './components/Formulario/index.vue'
export default {
  name: 'App',
  components: {
   Formulario
  }
}
</script>

<style scoped>

.card-header {
  background-color: #ff0000;
  color: white;
}

</style>