const express = require('express');
const app = express();



function teste() {
	alert('Login feito com sucesso')
	window.location.href = "index.html";

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
