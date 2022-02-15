const mongoose = require('mongoose');

const Telefone    =   mongoose.model('Telefone',{

    dd:{
        type: String,
        required: true,
        minLength:2,
        maxLength:2
    },

    numero:{
        type: String,
        required: true,
        maxLength:9,
        minLength:9
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

module.exports = Telefone;