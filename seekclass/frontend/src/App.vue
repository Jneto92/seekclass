<template>
  <div id="app" :class="{'hide-menu': !isMenuVisible}">
    <Header title="SeekClass" :hideToggle="false" :hideUserDropdown="false" :hideNotification="false"/>
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from "./components/template/Header";
import Menu from "./components/template/Menu";
import Footer from "./components/template/Footer";
import Content from "./components/template/Content";
//import Login from "./components/Login";
//import axios from 'axios';
//import func from 'vue-editor-bridge';

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
    Footer,
  },
  computed: mapState(['isMenuVisible'])
  /*created: function(){
	axios.get("http://localhost:8000/logar/jose.nascimento@estudante.ifb.edu.br/040510").then(res =>{
	  console.log(res)
	});
	//console.log("OK")
  }*/
};
</script>

<style>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}
#app.hide-menu {
	grid-template-areas: 
	"header header"
	"content content"
	"footer footer";
}
</style>
