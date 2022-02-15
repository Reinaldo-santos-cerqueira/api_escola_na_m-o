const mongoose = require('mongoose');

const Endereco    =   mongoose.model('Endereco',{

    cidade:{
        type: String,
        required: true
    },
    
    bairro:{
        type: String,
        required: true
    },

    logradouro:{
        type: String,
        required: true
    },

    numero:{
        type: String,
        required: true,
        minLength:0,
        maxLength:5
    },

    cep:{
        type: String,
        required: true,
        minLength:8,
        maxLength:8
    },

    estado_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Estado'
    }

});

module.exports = Endereco;