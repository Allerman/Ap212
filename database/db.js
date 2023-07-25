require("dotenv").config();
const connectLinkDB = process.env.DB_LINK;
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(connectLinkDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB conectado, baby!");
    } catch (err) {
      console.error("Erro ao conectar ao MongoDB:", err);
    }
  };
  
module.exports = connectDB;