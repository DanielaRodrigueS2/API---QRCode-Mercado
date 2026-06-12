const Nota = require('../models/notaFiscalModel');
const Produtos = require('../models/productModel');
const User = require('../models/userModel');
const Extractor = require('../extractors/extractor1');

exports.gerarNotaFiscal = async (req, res) =>{
    console.log('Entrou aaqui');
    const {urlNota} = req.body;
    const {userId} = req.user.id;
    console.log(urlNota, userId);

    try{
        const dadosNota = await Extractor.extrairDados(urlNota)
        console.log('DadosNota: ', dadosNota);

        if(!dadosNota) return res.status(400).json({erro: 'Url ou código incorretor, extração falhou'});
        console.log('Erro0');
        const {linkAcesso, local, dataEmissao, cnpj, endereco, valorTotal, produtos} = dadosNota;

        console.log('Erro1');

        const notaFiscal = new Nota({linkAcesso, local, dataEmissao, cnpj, endereco, valorTotal, produtos});

        console.log('Erro2');
        await notaFiscal.save();

        await User.findByIdAndUpdate(userId, {$addToSet: {notas:  notaFiscal}});

        console.log('Erro3');
        res.status(201).json({message: 'nota criada e salva com sucesso'});

    }
    catch(erro){
        res.status(500).json({erro});
    }
} 

exports.getAllNotas = async (req, res) =>{

    const userId = req.user.id;
    try{
        const notas = await User.findById(userId).select('notas')
        if (!notas) return res.status(401).json({erro: 'Nota(s) não localizadas'});

        return res.status(200).json(notas);
    }
    catch(erro){
        res.status(500).json({erro: 'ERRO NO SERVER'});
    }

}

exports.deleteNotaById = async (req, res) =>{

    const notaId = req.params.id;
    const userId = req.user.id;

    try{

        const notaDelete = await Nota.findById(nota_id);
        if(!notaDelete) return res.status(401).json({erro: 'Nota não encontrada'})

        const usuario = await User.updateOne(
            {_id: userId},
            {
                $pull:{
                    notas: notaDelete
                },
            }
        )
        res.status(200).json(usuario);
    }
    catch(erro){
        return res.status(500).json({erro: 'Erro ao excluir nota fiscal'})
    }

     


}