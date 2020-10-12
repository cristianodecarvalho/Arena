const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessaoController = require('./controllers/SessaoController')
const ArenaController = require('./controllers/ArenaController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/sessoes', SessaoController.index);
routes.post('/sessoes', SessaoController.store);

routes.get('/arenas', ArenaController.index);
routes.post('/arenas', upload.single('imagem') ,ArenaController.store);

module.exports = routes;

