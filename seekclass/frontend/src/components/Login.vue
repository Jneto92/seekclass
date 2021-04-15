<template>
  <div>
    <form class="box" id="login">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="e.g. alex@example.com" id="fields"/>
          </div>
        </div>

        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" id="fields" />
          </div>
      </div>
      <button class="button is-success" id="butao">Acessar</button><hr>
      <a href=""><label id="texto">Primeiro acesso</label></a><br>
      <a href=""><label id="texto">Esqueceu a senha?</label></a>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#login {
  margin-top: 150px;
  margin-left: 35%;
  width: 400px;
  background-color: snow;
  border-radius: 20px;
  border-style: solid;
  border-color: rgb(62, 151, 62);
}
#fields{
    width: 70%;
}
#texto{
    font-size: 18px;
}
</style>