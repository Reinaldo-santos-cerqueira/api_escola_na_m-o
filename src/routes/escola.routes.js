const mongoose = require('mongoose');
const router = require('express').Router();
const Escola = require('../models/escola')

router.post('/',async (req,res) => {
    const escola = await Escola(req.body).save()

    try{

        res.json({error:false,message: "inserido com sucesso",body:escola})


    }catch(e){

        res.json({error:true,message:e})

    }

})

router.post('/login',async (req,res) => {

    const {email,senha} = req.body

    try{
        const escola = await Escola.findOne({_email: email});
        if(escola.senha == senha){
            res.json({error:false,message: "Logado",body:escola})
        }else{
            res.json({error:true,message:"Email ou senha invalido"})
        }

    }catch(e){

        res.json({error:true,message:e})

    }

})

router.get('/',async (req, res) => {
    try{
        const escola = await Escola.find();
        res.json({error:false,escola})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})

router.get('/:id',async (req, res) => {
    const id = req.params.id
    try{
        const escola = await Escola.find({_id:id});
        res.json({error:false,escola})
    }catch(err){
        res.json({error:true,message:err.message})
    }
})



module.exports = router;