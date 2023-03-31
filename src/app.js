/*
 * Criando instancia do express
 */

const express = require("express");
const routes = require("./routes");

const app = express();

/*
 *Definindo o padrão de comunicação com JSON
 */

app.use(express.json());
app.use(routes);

// exportando o app
module.exports = app;
