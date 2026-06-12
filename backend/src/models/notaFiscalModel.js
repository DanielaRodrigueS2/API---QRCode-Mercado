const mongoose = require('mongoose');

const NotaFiscal = new mongoose.Schema({
    linkAcesso: String,
    local: String,
    dataEmissao: String,
    cnpj: String,
    endereco: String,
    valorTotal: Number,
    produtos: Array,
})

const Nota = mongoose.model('Nota', NotaFiscal);
module.exports = Nota;