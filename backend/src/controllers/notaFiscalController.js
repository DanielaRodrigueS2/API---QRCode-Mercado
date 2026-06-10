const Nota = require('../models/notaFiscalModel');
const Produtos = require('../models/productModel');
const User = require('../models/userModel');
const Extractor = require('../extractors/extractor1');

exports.gerarNotaFiscal = async (req, res) =>{
    const {urlNota} = req.body;
    const {userId} = req.user.id;

    try{
        const dadosNota = await Extractor.extrairDados(urlNota)

        if(!dadosNota) return res.status(400).json({erro: 'Url ou código incorretor, extração falhou'});
        const {linkAcesso, local, dataEmissao, cnpj, endereco, valorTotal, produtos} = dadosNota;

        const notaFiscal = new Nota({linkAcesso, local, dataEmissao, cnpj, endereco, valorTotal, produtos});
        await notaFiscal.save();

        await User.findByIdAndUpdate(userId, {$addToSet: {notas: {$each: [notaFiscal]}}});
        res.status(201).json({message: 'nota criada e salva com sucesso'});

    }
    catch(erro){

    }
} 