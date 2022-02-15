const mongoose = require('mongoose');

const Unidade = mongoose.model('Unidade',{
    nome:{
        type:String,
        required:true
    },
    escola_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },
})

module.exports = Unidade;