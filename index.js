import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// import fs from fs;

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "saber_compartilhado",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL com sucesso!");
});

app.get("/", (req, res) => {
  const query = "SELECT * FROM posts";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro no servidor");
      return;
    }
    // Mova a renderização para dentro do callback da consulta ao banco
    res.render("index.ejs", { postagens: results });
  });
});

app.get("/artigos", (req, res) => {
  const query = 'SELECT * FROM posts WHERE tipo="Artigo"';

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro no servidor");
      return;
    }
    // Mova a renderização para dentro do callback da consulta ao banco
    res.render("index.ejs", { postagens: results });
  });
});

app.get("/perguntas", (req, res) => {
  const query = 'SELECT * FROM posts WHERE tipo="Pergunta"';

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao executar a consulta:", err);
      res.status(500).send("Erro no servidor");
      return;
    }
    // Mova a renderização para dentro do callback da consulta ao banco
    res.render("index.ejs", { postagens: results });
  });
});

app.get("/publicar", (req, res) => {
  res.render("publicar.ejs");
});

app.post("/publicar", (req, res) => {
  console.log(req.body);

  const { autor, titulo, tipo, imagem, texto } = req.body;
  const query =
    "INSERT INTO posts (autor, titulo, tipo, imagem, texto) VALUES (?, ?, ?, ?, ?)";
  const values = [autor, titulo, tipo, imagem, texto];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error("Erro ao executar a inserção:", err);
      res.status(500).send("Erro no servidor");
      return;
    }
    res.status(201).redirect("/");
  });
});

app.get('/editar/:id', (req, res) => {
  const postId = req.params.id;
  db.query('SELECT * FROM posts WHERE id = ?', [postId], (error, result) => {
    if (error) {
      res.status(500).send({ message: 'Erro ao recuperar a postagem.' });
      return;
    }
    if (result.length === 0) {
      res.status(404).send({ message: 'Postagem não encontrada.' });
      return;
    }
    res.render('editar.ejs', { postagens: result[0],
     });
  });
});

app.delete("/deletar/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM posts WHERE id = ?";

  db.query(query, id, (err, result) => {
    if (err) {
      console.error("Erro ao executar a exclusão:", err);
      res.status(500).send("Erro no servidor");
      return;
    }
    res.status(200).send(`Postagem com id ${id} foi excluída com sucesso.`);
  });
});

app.put('/editar/', (req, res) => {
  const { id, autor, titulo, tipo, imagem, texto } = req.body;

  if (!id) {
    res.status(400).send({ message: 'ID da postagem é obrigatório.' });
    return;
  }

  const query = `
    UPDATE posts 
    SET autor = ?, titulo = ?, tipo = ?, imagem = ?, texto = ?
    WHERE id = ?
  `;

  db.query(query, [autor, titulo, tipo, imagem, texto, id], (error, result) => {
    if (error) {
      res.status(500).send({ message: 'Erro ao atualizar a postagem.' });
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send({ message: 'Postagem não encontrada.' });
      return;
    }
    res.status(200).send({ message: 'Postagem atualizada com sucesso!' });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
