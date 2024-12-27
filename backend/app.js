const express = require('express');
const cors = require('cors');

const router  = require('./scr/routes/usuarioRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(8000, ()=>{
    console.log('aplicação rodando na porta 8000');
});

