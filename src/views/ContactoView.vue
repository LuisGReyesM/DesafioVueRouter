<template>
    <div class="container mt-5">
        <h1>Contáctanos</h1>
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" v-model="nombre" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea class="form-control" id="mensaje" v-model="mensaje" rows="3" required></textarea>
            </div>
            <div class="text-center mt-4">
                <button type="submit" class="btn btn-primary btn-sm px-3"  @click.prevent="enviarFormulario">Enviar</button>
            </div>
           
        </form>
        <div class="text-center mt-4">
            <router-link to="/" class="btn btn-primary btn-sm px-3 mb-5">Volver al inicio</router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            email: '',
            mensaje: ''
        }
    },
}
</script>

<style scoped>
.container {
    max-width: 40%;
   
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 90px;
}

.btn {    
    width: 40%;
}
</style>