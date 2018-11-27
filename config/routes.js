
const auth = require('../app/controllers/auth');
const reg = require('../app/controllers/reg');

const user = require('../app/controllers/user');
const city = require('../app/controllers/city');

const authGuard = require('../app/middleware/auth');
module.exports = (app) => {
    


    //Авторизация
    app.get('/', (req, res) => {
        res.send('Hello');
    })
    //Тестовый роут, проверяю гуард
    app.get('/test', authGuard, (req, res) => {
        res.send('Вошли');
    })
    //Временная регистрация
    app.post('/register', reg.regIn);
    app.post('/signin', auth.signIn);


    //Работа с пользователем
    app.get('/users/:action', user.getAllUsers);
    app.get('/users/:id', user.getOneUser);
    app.post('/users/create',authGuard, user.createUser);
    app.put('/users/update/:id', authGuard, user.updateUser);
    app.get('/users/city/:id', user.getCityInfo);
    app.delete('/users/del/:id',authGuard, user.deleteUser);
    app.delete('/users/del',authGuard, user.deleteAllUsers);
    //Работа с городом
    app.get('/cities', city.getAllCity);
    app.post('/cities/create', authGuard, city.createCity);

}