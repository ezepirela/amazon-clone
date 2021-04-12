const express = require('express');
const Router = express.Router();
const controller = require('../controllers/controllersRoutes');
Router.get('/', (req, res) => {
    res.json({pushi: 'hi'})
});
Router.post('/payments/create', controller.getData)
// Router.post('/toDB',controller.sendDataToDB)
module.exports = Router;