const express = require("express");
const app = express();

//Usando o express EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get("/", (req, res) =>{
    res.render("index",{});
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar",{});
});

app.post("/salvarpergunta",(req, res)=>{
    res.send("Formulário Recebido");
});


app.listen(8080, ()=>{ 
    console.log("App rodando!");
});