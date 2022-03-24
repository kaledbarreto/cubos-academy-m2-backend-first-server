const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0;

app.get("/rodadas", (req, res) => {

  if (i < jogadores.length - 1) {
    i++;
    res.send(`É a vez de ${jogadores[i]} jogar!`);
  } else {
    i = 0;
    res.send(`É a vez de ${jogadores[i]} jogar!`);
  }
});

app.listen(8000);