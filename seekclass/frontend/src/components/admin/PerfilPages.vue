<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-user" main="Perfil" sub="Editar perfil" />
        <div class="stats">
            <Perfil :nome="perfil.usuario.nome" :email="perfil.usuario.email"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Perfil from '../home/Perfil'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'PerfilPage',
    components: {
        PageTitle,
        Perfil
    },
    data: function(){
        return {
            perfil: {

            }
        }
    },
    methods: {
        getStats(){
            axios.get(`${baseApiUrl}/perfis/`).then(res => this.perfil = res.data)
        }
    },
    mounted(){
        this.getStats()
    }
}
</script>

<style scoped>

</style>