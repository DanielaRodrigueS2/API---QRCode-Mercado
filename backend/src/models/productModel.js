const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: String,
    qtd: Number,
    precoTotal: Number,
    unidade: String,
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;