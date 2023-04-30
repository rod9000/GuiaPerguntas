const express = require("express");
const app = express();

//Usando o express EJS
app.set('view engine', 'ejs');

app.get("/", (req, res) =>{
    var nome = "Rodrigo";
    var lang = "Java Script";
    res.render("index",{
        nome: nome,
        lang: lang,
    });
});

app.listen(8080, ()=>{
    console.log("App rodando!");
});