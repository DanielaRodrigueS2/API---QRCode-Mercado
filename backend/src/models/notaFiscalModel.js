const mongoose = require('mongoose');
const Produtos = require('./productModel');

const NotaFiscal = new mongoose.Shchema({
    linkAcesso: String,
    local: String,
    dataEmissao: Date,
    cnpj: String,
    endereco: String,
    valorTotal: Number,
    produtos: [Produtos],
})

const Nota = mongoose.model('Nota', NotaFiscal);
module.exports = Nota;