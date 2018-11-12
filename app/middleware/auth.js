const jwt = require('jsonwebtoken');
const tokens = require('../models/token').jwt;

/* Метод авторизации, получаем токен из заголовка и проверяем его
использую секретный ключ в методе verify, далее проверяем токен на валидность */
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        res.json({msg: ' token not provided'});
    }
    
    try {
        jwt.verify(authHeader, tokens.seecret);
    } catch (e) {
        if(e instanceof jwt.JsonWebTokenError){
            res.json({msg: 'invalid token'})
        }
    }
    next();
}
