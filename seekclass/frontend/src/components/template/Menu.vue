<template>
  <aside class="menu" v-show="isMenuVisible">
    <input
      type="search"
      name=""
      id="digite"
      placeholder="Digite algo"
      class="input"
    />
    <button class="button is-primary is-inverted" id="butao">Buscar</button>
    <div class="navbar-item has-dropdown is-hoverable" id="navbar">
      <div id="menu">
        <a class="navbar-link is-arrowless" > Menu de opções </a>  
      </div>      
      <div class="navbar-dropdown" id="itensMenu">
        <a class="navbar-item"> Mapa do IFB </a>
        <a class="navbar-item"> <router-link to="/tabelahorario">Grade Horaria</router-link> </a>
        <a class="navbar-item"> Professores </a>
        <a class="navbar-item"> Monitoria </a>
        <hr class="navbar-divider" />
        <div class="navbar-item">Version 0.9.2</div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible"]),
};
</script>

<style scoped>
.menu {
  grid-area: menu;
  background-color: rgb(62, 151, 62);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#menu {
  width: 300px;
  background-color: azure;
  text-decoration: none;
}
#menu a{
  text-decoration: none;
  color: #000;
  display: block;
}
#menu a:hover{
  text-decoration: none;
}
Aside.menu > button#butao {
  position: absolute;
  width: 100px;
  height: 5%;
  margin-left: 190px;
}
Aside.menu > button#butao:hover {
  background-color: rgb(62, 151, 62);
}
Aside.menu > input.input {
  position: relative;
  width: 180px;
  height: 6%;
  color: #000;
  justify-self: flex-start;
  text-decoration: none;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#itensMenu{
  text-decoration: none;
}
#itensMenu a{
  text-decoration: none;
  color: #000;
  display: block;
  
}
#itensMenu a:hover{
  text-decoration: none;
  
}
</style>