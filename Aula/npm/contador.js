const express = require('express');

const app = express();

//GET /contador -> 3 (Incrementando)

let contador = 0;

app.get("/contador", (req, res) => {
  contador++;
  res.send(`Você já abriu esta página ${contador} vez(es).`);
});

app.get("/zerar", (req, res) => {
  contador = 0;
  res.send("Zerei!"); //O servidor sempre precisa responder a requisição.
})

app.get("/atribuir", (req, res) => {
  console.log("Contador era " + contador)
  const valor = req.query.valor;

  if (valor === undefined) {
    res.status(400);
    res.send("Você precisa informar o valor.");
  } else {
    contador = Number(valor);
    console.log("Contador agora é " + contador)
    res.send("Atribuido com sucesso!");
  }


});

app.listen(8000);