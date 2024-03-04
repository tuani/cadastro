const express = require("express");
const cors = require('cors');
const app = express();
const User = require("./models/user");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/cadastrar", async (req, res) => {
  //console.log(req.body);

  await User.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!",
      });
    })
    .catch((error) => {
      console.error("Erro ao cadastrar usuário:", error);
      return res.status(400).json({
        erro: true,
        mensagem: "Erro ao cadastrar usuário: " + error.message,
      });
    });
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080: http://localhost:8080");
});
