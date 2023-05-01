const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const connection = require("./database/database");
//DataBase
connection.
authenticate()
.then(()=>{
    console.log("Conexâo feita com o banco de dados")
}).catch((msgErro)=>{
    console.log(msgErro);
})

//Usando o express EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.render("index",{});
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar",{});
});

app.post("/salvarpergunta",(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Formulário Recebido! Titulo: " + titulo + " Descrição: " + descricao );
});


app.listen(8080, ()=>{ 
    console.log("App rodando!");
});