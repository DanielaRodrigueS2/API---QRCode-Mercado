const espress = require('express');
const cors = require('cors');

const app = express({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
});


app.use(express.json());
app.use(cors());

module.exports = app;