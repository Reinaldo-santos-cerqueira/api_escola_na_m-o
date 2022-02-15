const mongoose = require('mongoose');

const Controller_aluno_unms = mongoose.model('Controller_aluno_unms',{

    escola_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },
    
    aluno_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Aluno'
    },
    
    nota_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Nota'
    },

    materia_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Materia'
    },

    serie_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Serie'
    },

    unidade_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Unidade'
    },

})

module.exports = Controller_aluno_unms;