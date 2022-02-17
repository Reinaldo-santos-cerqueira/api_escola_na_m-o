const express = require('express');

const mongoose = require('mongoose');

require('./db');

const escolaRouter = require('./src/routes/escola.routes');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"Você esta na rota padrão errou algum parametro da URL"})
});

app.use('/escola',escolaRouter);

app.listen(3000,()=>{
    console.log("Você esta na porta 3000")
})