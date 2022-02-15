const mongoose = require('mongoose');

const Nota = mongoose.model('Nota',{
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

module.exports = Nota;