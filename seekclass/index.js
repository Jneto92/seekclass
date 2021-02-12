//carregando rotas
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const admin = require('./routers/admin');
const path = require('path');


//config
    //Body parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Public
        app.use(express.static(path.join(__dirname, "public")));

//rotas
    //app.use('/', admin);
    app.get('/', (req, res)=>{
        /*Usuario.findAll().then(function(user){
            console.log(user)
            res.render('test', {user: user});
        });*/

        res.render('login')
    });
    app.get('/cadastrar', (req, res)=>{
        res.render('cadastro')
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
    app.post('/definirsenha', (req, res)=>{
        console.log(req.body.email)
        Usuario.update(
            {senha:  req.body.senha},
            { where:{email: req.body.email}}
        ).then(()=>{
            res.redirect('/');
        }).catch((erro)=>{
            res.send("Erro na atualização do usuário."+erro);
        });
    });

    app.post('/auth', (req, res)=>{
        Usuario.findOne({
            where: {
              email: req.body.email,
              senha: req.body.senha
            }
          }).then((usuario)=>{
             console.log(usuario) 
             if(usuario){
                res.redirect('/');
             }else{
                console.log("erro")
                
             }
            
        }).catch((erro)=>{
            res.send("Erro na atualização do usuário."+erro);
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
