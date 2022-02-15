const mongoose = require('mongoose');

const Materia = mongoose.model('Materia',{
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

module.exports = Materia;