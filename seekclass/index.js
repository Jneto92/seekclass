//carregando rotas
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');
const admin = require('./routers/admin');
const path = require('path');
const alert = require('alert');
const popup = require ('node-popup');



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
            res.redirect('/');
        }).catch((erro)=>{
            res.send("Erro na criação do usuário."+erro);
        });
        
    });

    app.post('/definirsenha', (req, res)=>{
        Usuario.findOne({
            where: {
              email: req.body.email,
              //senha: req.body.senha
            }
          }).then((usuario)=>{
             console.log("senha:"+usuario['senha']);
            if(usuario['senha'] != null){
                console.log("erro");
                alert("Senha já definida");
                //res.send("Senha já definida");
            }else{
                if (req.body.senha==req.body.csenha){ 
                    Usuario.update(
                    {senha:  req.body.senha,
                    status: true},//acrescentado dia 20/02, status após o primeiro acesso, 1 para senha foi criada, 0 ou null senha ainda n foi definida
                    { where:{email: req.body.email}}
                ).then(()=>{
                    res.redirect('/');
                }).catch((erro)=>{
                    res.send("Erro na atualização do usuário."+erro);
                });
        
                } else{}
            } 
             
             
        }).catch((erro)=>{
            res.send("Senha já foi definida"+erro);//acrescentado dia 22/02 
        });

            
        
    });

    app.get('/home', (req, res)=>{
        res.render('home');
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
                alert("Login feito com sucesso.");
                res.redirect('/home');
             }else{
                res.send("senha incorreta!");
                
                console.log("erro")
                
             }
            
        }).catch((erro)=>{
            res.send("Erro na autenticação do usuário."+erro);
        });
    });
    //Acrescentado 20/02 
    //rota para página esqueceu a senha
    app.get('/esqueceusenha', (req, res)=>{
        res.render('redefinirsenha');
    });
    //rota de requisição para trocar a senha
    app.post('/redefinirsenha', (res, req)=>{
        Usuario.findOne({
            where: {
              email: req.body.email,
              //senha: req.body.senha
            }
        }).then((usuario)=>{
             console.log("status"+usuario['status']); 
             /*if(usuario){
                alert("Login feito com sucesso.");
                res.redirect('/home');
             }else{
                res.send("senha incorreta!");
                
                console.log("erro")
                
             }*/
            
        }).catch((erro)=>{
            res.send("Erro na autenticação do usuário."+erro);
        });
    });



app.listen(8080, () => {
    console.log('Executando')
});
