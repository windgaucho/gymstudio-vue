import Rubros from './components/administracion/rubros/Rubros.vue';
import CrearRubro from './components/administracion/rubros/CrearRubro.vue';
import EditarRubro from './components/administracion/rubros/EditarRubro';
import EliminarRubro from './components/administracion/rubros/EliminarRubro';
import Articulos from './components/administracion/articulos/Articulos.vue';
import CrearArticulo from './components/administracion/articulos/CrearArticulo.vue';
import EditarArticulo from './components/administracion/articulos/EditarArticulo.vue';
import EliminarArticulo from './components/administracion/articulos/EliminarArticulo.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/rubros', name: 'rubros', component: Rubros },
    { path: '/rubros/crear', name: 'crear_rubro', component: CrearRubro },
    { path: '/rubros/:id/editar', name: 'editar_rubro', component: EditarRubro },
    { path: '/rubros/:id/eliminar', name: 'eliminar_rubro', component: EliminarRubro },
    { path: '/articulos',name: 'articulos', component: Articulos },
    { path: '/articulos/crear', name: 'crear_articulo', component: CrearArticulo },
    { path: '/articulos/:id/editar', name: 'editar_articulo', component: EditarArticulo },
    { path: '/articulos/:id/eliminar', name: 'eliminar_articulo', component: EliminarArticulo },
    { path: '/redirect-me', redirect: '/' },
];
