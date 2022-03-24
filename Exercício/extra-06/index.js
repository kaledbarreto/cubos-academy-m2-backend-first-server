const express = require("express");

const app = express();

let segundos = 0;
let minutos = 0;
let id;

const cronometro = () => {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }
  console.log(`min: ${minutos} seg:${segundos}`)
  // res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
}

app.get("/", (req, res) => {
  res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
});

app.get("/iniciar", (req, res) => {
  id = setInterval(cronometro, 1000);
  res.send("Cronometro Iniciado!");
});

app.get("/pausar", (req, res) => {
  clearInterval(id);
  res.send("Cronometro Pausado!");
});

app.get("/continuar", (req, res) => {
  id = setInterval(cronometro, 1000);
  res.send("Cronometro Continuando!");
});

app.get("/zerar", (req, res) => {
  minutos = 0;
  segundos = 0;
  res.send("Cronometro Zerado!");
});





app.listen(8000);