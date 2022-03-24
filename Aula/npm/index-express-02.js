const express = require("express");
const { reset } = require("nodemon");

const app = express();

app.get("/livros/:numero/capitulo/:cap", (req, res) => { //Criando um parametro (:numeros).
  console.log(req.params); //Retorna todos os parametros todos os parametros recebidos nessa rota.
  if (req.params.numero === "1") {
    res.send("Livro Um");
  } else if (req.params.numero === "2") {
    res.send("Livro Dois");
  } else if (req.params.numero === "3") {
    res.send("Livro Três");
  }
  res.status(404);
  res.send(`O livro ${req.params.numero} não existe.`);
});

// app.get("/livros/1", (req, res) => {
//   res.send("Livro Um");
// });

// app.get("/livros/2", (req, res) => {
//   res.send("Livro Dois");
// });

// app.get("/livros/3", (req, res) => {
//   res.send("Livro Três");
// });

app.listen(8000);