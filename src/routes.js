import Rubros from './components/administracion/rubros/Rubros.vue';
import Rubro from './components/administracion/rubros/Rubro.vue';
import Articulos from './components/administracion/articulos/Articulos.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/rubros', name: 'rubros', component: Rubros },
    { path: '/rubros/create', name: 'create_rubro', component: Rubro },
    { path: '/articulos',name: 'articulos', component: Articulos },
];
