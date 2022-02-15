const mongoose = require('mongoose');

const Pais    =   mongoose.model('Pais',{

    nome:{
        type: String,
        required: true
    },
  
    end_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Endereco'
    },

    matricula:{
        type: String,
        required: true
    },

    turno:{
        type: String,
        required: true,
        enum: ['Vespertino','Matutino','Noturno'],
        default: 'Matutino'
    },

    telefone_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Telefone'
    },

    escola_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },
    pais_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Pais'
    }, 

})

module.exports = Pais;