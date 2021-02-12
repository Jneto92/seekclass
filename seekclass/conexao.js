const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaSeekClass', 'root', '123456', {
    host: "localhost", 
    dialect: "mysql"
});

sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso!");
}).catch((erro)=>{
    console.log("Falha ao conectar: "+erro);
});

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        unique: "email_user",
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "José Neto Lima Nascimento",
    email: "netolima1992@gmail.com"
});
//
//Usuario.sync({force: true});