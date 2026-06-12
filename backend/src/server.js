require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const dns = require('node:dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

mongoose.connect(process.env.MONGO_URI,)
.then(() =>{
    console.log('Conexão com mongodb realizada >:3');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Servidor ligado na porta');
    });
})
.catch((err) =>{
    console.log('Erro ao se conectar ao banco oficial', err.message)
})
