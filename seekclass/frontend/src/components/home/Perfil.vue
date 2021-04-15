<template>
    <div class="perfil">
        <div class="box">
            <p><span class="perfil-nome">Nome: {{nome}}</span></p>
            <p><span class="perfil-email">E-mail: {{email}}</span></p>
        </div>
        
    </div>    
</template>

<script>
export default {
    name: 'Perfil',
    props: 
        ['nome', 'email']
    
}
</script>

<style scoped>
.box{
    width: 500px;
}
</style>