import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import PerfilPages from '../components/admin/PerfilPages'
import TabelaHorario from '../components/home/TabelaHorario'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'perfilPages',
    path: '/perfil',
    component: PerfilPages
},{
    name: 'tabelaHorario',
    path: '/tabelahorario',
    component: TabelaHorario
}]

export default  new VueRouter({
    mode: 'history',
    routes
})

