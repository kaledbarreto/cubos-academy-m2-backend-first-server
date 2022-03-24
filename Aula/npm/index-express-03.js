const express = require("express");

const app = express();

app.get('/soma', (req, res) => {
  console.log(req.query); //Traz as informações passadas na URL. (Para passar informações pela url, ex: http://localhost:8000/soma?primeirovalor=3&segundovalor=8);
  const primeiro = Number(req.query.primeirovalor); //Tem que transformar em numero, pois o query sempre traz em string.
  const segundo = Number(req.query.segundovalor);
  res.send(String(primeiro + segundo)); //Tem que transformar em string pois o send só envia string. (Teria como passar pra string com o método ".toString()").
});

app.listen(8000);