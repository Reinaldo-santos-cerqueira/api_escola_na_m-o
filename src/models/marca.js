const mongoose = require('mongoose');

const Marca = mongoose.model('Marca',{
    nome:{
        type:String,
        required:true
    }, 
})

module.exports = Marca;