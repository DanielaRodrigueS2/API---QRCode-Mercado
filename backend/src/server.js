require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

app.listen(process.env.PORT || 3000, () =>{
    console.log('Api rodando')
})
