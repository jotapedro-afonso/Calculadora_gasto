const express = require("express");
const path = require('path');

const app = express();

app.set("view engine", "ejs");

// CSS e arquivos da pasta public
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {

    res.render("index", {
        resultado: null
    });

});


app.post("/", (req, res) => {

    const consumo = Number(req.body.consumo);
    const bateria = Number(req.body.bateria);

    const distancia = consumo * bateria;


    res.render("index", {
        resultado: distancia
    });

});


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});