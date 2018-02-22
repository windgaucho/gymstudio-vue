import Rubros from './components/administracion/rubros/Rubros.vue';
import Articulos from './components/administracion/articulos/Articulos.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/rubros', component: Rubros },
    { path: '/articulos', component: Articulos },
];
