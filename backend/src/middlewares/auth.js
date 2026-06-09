const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).json({erro: 'Token não foi fornecido ou encontrado'});

    const tokenAuth = authHeader.split(' ')[1];

    try{
        const decodedToken = jwt.verify(process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    }
    catch(erro){
        return res.status(401).json({erro: 'Toekn inválido'});
    }
}