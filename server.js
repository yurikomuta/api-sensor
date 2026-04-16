const express = require("express");
const app = express();

app.get("/sensor", (req, res) => {
  const { temp, hum } = req.query;

  if (!temp || !hum) {
    return res.status(400).send("Dados inválidos");
  }

  console.log(`Temp: ${temp} | Umidade: ${hum}`);

  res.send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});