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

    email:{
        type: String,
        required: true
    },

    senha:{
        type: String,
        required: true
    },

})

module.exports = Escola;