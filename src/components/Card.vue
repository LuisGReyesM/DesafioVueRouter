<template>
  <section class="container my-5" id="productos">
    <h1 class="text-center mb-2">Nuestros Productos</h1> <!-- Ajustar el margen inferior -->
    <div class="row justify-content-center">
      <div class="col-sm-6 col-md-4 mb-4">
        <div class="card h-100">
          <img :src="require(`@/assets/img/${imageUrl}`)" class="card-img-top" :alt="title" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{ precio }}</li>
            <li class="list-group-item">Para: {{ cantidadPersonas }} personas</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    precio: {
      type: String,
      required: true
    },
    cantidadPersonas: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10px; /* Ajusta según tus necesidades */
}

.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
  color: #6c757d;
}

.card-link {
  color: #007bff;
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
