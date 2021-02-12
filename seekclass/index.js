const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');

//config
    //Body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//rotas
       

    app.get('/cadastrar', (req, res)=>{
        res.render('cadastro')
    });
    app.get('/', (req, res)=>{
        res.render('login')
    });
    app.get('/first', (req, res)=>{
        res.render('primeiroacesso')
    });
    app.post('/cadastrar', (req, res)=>{

        Usuario.create({
            nome: req.body.nome,
            email: req.body.email
        }).then(()=>{
            //res.send("Usuário cadastrado")
            res.redirect('/login');
        }).catch((erro)=>{
            res.send("Erro na criação do usuário."+erro);
        });
        
    });

/*app.get("/",(req, res) => {
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
};*/
app.listen(8080, () => {
    console.log('Executando')
});
