const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const router = require("./routes/routes");
const connectDB = require("./database/db");

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.use(router);

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});
