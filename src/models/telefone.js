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
    }

})

module.exports = Telefone;