const express = require('express');
const cors = require('cors');

const NotasRoutes = require('./routes/NotasRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

const app = express({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
});
app.use(express.json());
app.use(cors());

app.use(NotasRoutes);
app.use(AuthRoutes);

module.exports = app;