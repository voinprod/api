const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

config.express(app);
config.routes(app);
mongoose.connect(config.app.mongoUri , { useNewUrlParser: true });
app.listen(config.app.port, () => console.log('work on port' + config.port));