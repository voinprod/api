const bCrypt = require('bcrypt');

const Admin = require('../models/admin');
/* Создаю модель админа, для пароля генерю соль, 
если все ок вывожу Success, сохраняю hash в моделе */
const regIn = (req, res) => {
    const {login, password} = req.body;
    let admin = new Admin({
        login: login,
        password: password,
    })

  
        bCrypt.genSalt(10, (err, salt) => {
            bCrypt.hash(admin.password, salt, (err, hash) => {
                if(err) {
                    res.status(401).json({msg: 'Invalid'})
                };
                admin.password = hash;
                admin.save((err, data) => {
                    if(err){
                        return res.status(401).json({msg: 'Invalid data'});
                    }else{
                        return res.status(200).json({msg: "Success"});
                    }
                });
            })
        })
    
    
}

module.exports = {
    regIn,
}