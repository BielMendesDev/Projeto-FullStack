const express = require('express');
const connection = require('../config/db_connection');
const router = express.Router();
const UsuarioController = require('../controllers/user_controller');

router.post('/novoUsuario', UsuarioController.novoUsuario);

router.get('/listarUsuarios', UsuarioController.listarUsuarios);

router.get('/listarUmUsuario/:id', UsuarioController.listarUmUsuario);

router.put('/atualizarUsuario/:id', UsuarioController.atualizarUsuario);

router.delete('/deletarUsuario/:id', UsuarioController.deletarUsuario);

module.exports = router;
