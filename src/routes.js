import Rubros from './components/administracion/rubros/Rubros.vue';
import CrearRubro from './components/administracion/rubros/CrearRubro.vue';
import EditarRubro from './components/administracion/rubros/EditarRubro';
import EliminarRubro from './components/administracion/rubros/EliminarRubro';
import Articulos from './components/administracion/articulos/Articulos.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/rubros', name: 'rubros', component: Rubros },
    { path: '/rubros/crear', name: 'crear_rubro', component: CrearRubro },
    { path: '/rubros/:id/editar', name: 'editar_rubro', component: EditarRubro },
    { path: '/rubros/:id/eliminar', name: 'eliminar_rubro', component: EliminarRubro },
    { path: '/articulos',name: 'articulos', component: Articulos },
    { path: '/redirect-me', redirect: '/' },
];
