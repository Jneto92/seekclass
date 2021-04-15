<template>
  <div>
    <div id="header">
      <div id="titulo"><h1 id="seekclass">SeekClass</h1></div>
      
      <input type="search" name="" id="digite" placeholder="Digite algo" class="input"/>
      <button class="button is-primary is-inverted" id="butao">Buscar</button>

    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
#header {
  height: 70px;
  background-color: rgb(62, 151, 62);
}
#titulo {
  float: left;
  font-size: 30px;
  width: 70%;
  color: azure;
  display: table-cell;
  padding-left: 10px;
  margin-top: 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#digite{
  float: left;
  width: 20%;
  color: azure;
  padding-left: 10px;
  margin-top: 15px;
  color: black;
}
#butao{
  margin-left: 10px;
  margin-top: 15px;
}
#seekclass{
    text-align: center;
    display:table-cell;
}
</style>