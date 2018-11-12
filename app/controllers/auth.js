
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Admin = require('../models/admin');
const { tokens } = require('../../config/token').jwt;

// Метод для авторизации пользователя.
// exec - преобразуем в промис
// bCrypt.compareSync - сравниваем пароли
// jwt.sign - jsonwebtoken, передаю id и секретный ключ из конфига


const signIn = (req, res) => {
    const {login, password} = req.body;
    Admin.findOne({ login })
        .exec()
        .then((admin) => {
            if(!admin){
                res.status(401).json({msg: "user not found"})
            }
            
            const isValid = bCrypt.compareSync(password, admin.password);
            
            if(isValid) {
                console.log(admin._id.toString());
                const token = jwt.sign(admin._id.toString(), tokens.seecret);
                res.json({token: token});
               
            }else{
                res.status(401).json({msg: "false"})
            }
        })
}



module.exports = {
    signIn,
}