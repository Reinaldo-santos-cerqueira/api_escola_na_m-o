const mongoose = require('mongoose');

const Serie = mongoose.model('Serie',{
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

module.exports = Serie; 