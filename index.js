const express = require('express');

const mongoose = require('mongoose');

require('./db');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:"Você esta na rota padrão errou algum parametro da URL"})
});
 
app.listen(3000,()=>{
    console.log("Você esta na porta 3000")
})