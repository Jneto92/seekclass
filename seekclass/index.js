const express = require('express');
const app = express();

app.set('view engine', 'ejs');



app.get("/",(req, res) => {
    //res.render("../views/index");
    res.sendFile(__dirname + "/html/index.html");
    
});

app.get("/cadastro",(req, res) => {
    //res.render("../views/index");
    res.sendFile(__dirname + "/html/cadastro.html");
    
});

app.get("/senha",(req, res) => {
    //res.render("../views/index");
    res.sendFile(__dirname + "/html/senha.html");
    
});
app.get("/home",(req, res) => {
    //res.render("../views/index");
    res.sendFile(__dirname + "/html/paginainicial.html");
    
});

function cadastrar(){
    res.sendFile(__dirname + "/html/cadastro.html");
};
app.listen(8080, () => {
    console.log('Executando')
});
