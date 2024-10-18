import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Productos from '../views/ProductosView.vue';
import Contacto from '../views/ContactoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos,
    props: route => ({
      title: 'Desayunos',
      description: 'Contamos con desayunos nutritivos y deliciosos.',
      imageUrl: 'desayunos.jpg', // Asegúrate de que esta imagen exista en la carpeta correcta
      precio: '$2000',
      cantidadPersonas: 'Para dos personas'
    })
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto,
    props: {
      nombre: 'Juan Pérez',  // Ejemplo de nombre
      email: 'juan.perez@example.com'  // Ejemplo de email
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
