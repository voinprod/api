const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require("node-cron");

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
}