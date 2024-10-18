<template>
  <div class="container mt-5">
    <Card :title="title" :description="description" :imageUrl="imageUrl" :precio="precio"
      :cantidadPersonas="cantidadPersonas" />

    <div class="text-center mt-4">
      <router-link to="/" class="btn btn-primary mt-4 mb-5">Volver al inicio</router-link>
    </div>

  </div>
</template>

<script setup>
import Card from '../components/Card.vue';
import { defineProps } from 'vue';

// Recibe las props de la ruta
const props = defineProps(['title', 'description', 'imageUrl', 'precio', 'cantidadPersonas']);
</script>
