const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: String,
    precoUnitario: Number,
    precoTotal: Number,
    descricao: String,
    unidade: String,
    quantidade: Number,
    codigo: String
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;