<template>
  <div class="text-center">
    <h1 class="mb-1">Bienvenido a la Página Principal</h1> <!-- Reduce el margen inferior -->
    <Card 
      title="Colaciones"
      description="Some quick example text to build on the card title and make up the bulk of the card's content."
      imageUrl="colaciones.jpg" 
      precio="8000"
      cantidadPersonas="5 personas"
    />
  </div>
</template>

<script>
// @ es un alias a /src
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
/* Puedes ajustar otros estilos aquí si es necesario */
</style>
