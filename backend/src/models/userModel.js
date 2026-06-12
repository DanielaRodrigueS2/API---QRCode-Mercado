const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NotaFiscal = require('./notaFiscalModel');

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
    notas:[{type: mongoose.Schema.Types.ObjectId, ref: 'Nota'}]
})

User.pre('save', async function(){
    if(!this.isModified('senha')) return

    try{
        const salt = await bcrypt.genSalt(10);
        this.senha = await bcrypt.hash(this.senha, salt);
    }
    catch(error){
        console.log(error);
    }
});

User.methods.compararSenha = function(senhaInserida){
    return bcrypt.compare(senhaInserida, this.senha);
};

module.exports = mongoose.model('User', User);