const mongoose = require('mongoose');

const Escola    =   mongoose.model('Escola',{

    nome:{
        type: String,
        required: true
    },

    cnpj:{
        type: String,
        required: true,
        maxLength:14,
        minLength:14
    },

    end_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Endereco'
    },

    email:{
        type: String,
        required: true
    },

    senha:{
        type: String,
        required: true
    },

    telefone_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Telefone'
    },

})

module.exports = Escola;