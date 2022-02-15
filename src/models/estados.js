const mongoose = require('mongoose');

const Estados    =   mongoose.model('Estados',{

    nome:{
        type: String,
        required: true
    },
    
    sigla:{
        type: String,
        required: true,
        minLength:2,
        maxLength:2
    } 

});

module.exports = Estados;