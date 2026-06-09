const mongoose = require('mongoose');
const Produtos = require('./productModel');

const NotaFiscal = new mongoose.Shchema({
    chaveAcesso: String,
    numeroNota: String,
    serie: String,
    dataHora: String,
    valorTotal: Number,
    formaPagamento: String,
    produtos: [Produtos],
})

const Nota = mongoose.model('Nota', NotaFiscal);
module.exports = Nota;