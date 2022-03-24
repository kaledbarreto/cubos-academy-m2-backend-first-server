const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let i = 0;

app.get("/", (req, res) => {

  if (i < jogadores.length - 1) {
    i++;
    res.send(`É a vez de ${jogadores[i]} jogar!`);
  } else {
    i = 0;
    res.send(`É a vez de ${jogadores[i]} jogar!`);
  }
});

app.get("/remover", (req, res) => {
  const indice = Number(req.query.indice);

  if (indice > -1 && indice < jogadores.length) {
    jogadores.splice(indice, 1);
    res.send(String(jogadores));
  } else {
    res.send(`Não existe jogador no índice informado ${indice} para ser removido.`);
  }
});

app.get("/adicionar", (req, res) => {
  const indice = Number(req.query.indice);
  const nome = req.query.nome;

  if (indice > jogadores.length - 1) {
    res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`);
  } else if (indice / indice !== 1) {
    jogadores.push(nome);
    res.send(String(jogadores));
  } else {
    jogadores.splice(indice, 0, nome);
    res.send(String(jogadores));
  }
})

app.listen(8000);