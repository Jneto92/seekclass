const Sequelize = require('sequelize');

//conexão com o banco de dados
const sequelize = new Sequelize('sistemaSeekClass', 'root', '123456', {
    host: "localhost", 
    dialect: "mysql"
});
//tratamento de erro da conexão com o banco
sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso!");
}).catch((erro)=>{
    console.log("Falha ao conectar: "+erro);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}