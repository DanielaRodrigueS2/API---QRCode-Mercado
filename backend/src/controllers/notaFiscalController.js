const Nota = require('../models/notaFiscalModel');
const Produtos = require('../models/productModel');
const User = require('../models/userModel');
const Extractor = require('../extractors/extractor1');

exports.gerarNotaFiscal = async (req, res) =>{
    const {urlNota} = req.body;

    try{
        const dadosNota = await Extractor.extrairDados(urlNota)

        if(!dadosNota) return res.status(400).json({erro: 'Url ou código incorretor, extração falhou'});


    }
    catch(erro){

    }
} 