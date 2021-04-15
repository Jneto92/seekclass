const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const { alert } = require('node-popup');
//config
    //Body parser
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

req.body.btnSelect.addEventListener("click", ()=>{
    console.log("Selecionou")
});

function teste() {
	alert("aq");
	Usuario.findOne({
		where: {
		  email: "jose.nascimento@estudante.ifb.edu.br"
		  //senha: req.body.senha
		}
	}).then((usuario)=>{
		 console.log(usuario['email']) 
		 if(usuario){
			alert(usuario);
			//res.redirect('/home');
		 }else{
			//res.send("senha incorreta!");
			
			console.log("erro")
			
		 }
		
	}).catch((erro)=>{
		alert("a");
		//res.send("Erro na autenticação do usuário."+erro);
	});
	

};

function cadastrar(){
	window.location.href = "html/cadastro.html";
};
function senha(){
	window.location.href = "html/senha.html";
};

function login(){
	alert('aqui')
	window.location.href = "paginainicial.html";
};
