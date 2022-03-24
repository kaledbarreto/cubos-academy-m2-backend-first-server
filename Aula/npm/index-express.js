const express = require("express");

const app = express(); //Criar uma aplicação

app.get("/", (req, res) => { //Quando eu receber uma requisição http do verbo GET para o recurso "/" eu quero fazer, a ação... (req -> requisição, res -> Resposta)
  console.log("Recebi um GET /");

  res.send("Olá!"); //Enviar a resposta "olá"
});

app.get("/academy", (req, res) => {
  console.log("Recebi meu outro GET");

  res.send("Meu primeiro servidor alterado 2!!!");
});

app.listen(8000); //Na porta 8000 vai começar a escutar, ou seja, vai começar a poder receber requisições.