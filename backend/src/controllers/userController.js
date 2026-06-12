const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

exports.register = async (req, res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()) return res.json(400).json({erros: erros.array()});

    const {email, nome, senha} = req.body;

    try{
        const emailExistente = await User.findOne({email});
        if(emailExistente) return res.status(400).json({erro: 'Email já cadastrado'});

        const novoUsuario = new User({nome, email, senha});
        await novoUsuario.save();

        res.status(201).json({message: 'Usuário criado com sucesso'});
    }
    catch(erro){
        console.log('Erro ao criar user')
        res.status(500).json({erro});
    }
};

exports.login = async (req,res) =>{

    const {email, senha} = req.body;

    try{
        const usuario = await User.findOne({email});

        if(!usuario) return res.status(400).json({erro: 'Usuário nao encontrado'});

        const senhaCorreta = await usuario.compararSenha(senha);
        if(!senhaCorreta) return res.status(400).json({erro: 'senha incorreta'});

        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome},
            process.env.JWT_SECRET,
            {expiresIn: '4h'}
        )

        res.json({token, usuario:{id: usuario._id}});
    }
    catch(erro){
        console.log(erro);
        res.status(500).json({erro: 'erro ao realizar login'});
    }

}
