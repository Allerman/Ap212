const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const router = require("./routes/routes");
const connectDB = require("./database/db");

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.use(router);

app.listen(port, ()=>{console.log(`rodando em http://localhost:${port}`)});