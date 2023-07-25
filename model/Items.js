const mongoose = require('mongoose');

const quartoSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        default: false,
    }
});

const cozinhaSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        default: false,
    }
});

const lavanderiaSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        default: false,
    }
});

const banheiroSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        default: false,
    }
});

const Quarto = mongoose.model("Quarto", quartoSchema);
const Cozinha = mongoose.model("Cozinha", cozinhaSchema);
const Lavanderia = mongoose.model("Lavanderia", lavanderiaSchema);
const Banheiro = mongoose.model("Banheiro", banheiroSchema);

module.exports = {
    Quarto,
    Cozinha,
    Lavanderia,
    Banheiro,
}