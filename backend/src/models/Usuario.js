const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NotaFiscal = require('./notaFiscal');

const User = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    },
    notas:{
        type: [NotaFiscal]
    }
})

User.pre('save', async function(next){
    if(!this.isModified('senha')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    }
    catch(error){
        next(error);
    }
});

User.methods.compararSenha = function(senhaInserida){
    return bcrypt.compare(senhaInserida, this.senha);
};

module.exports = mongoose.model('User', User);