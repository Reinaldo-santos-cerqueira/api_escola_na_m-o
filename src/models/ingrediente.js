const mongoose = require('mongoose');

const Ingrediente = mongoose.model('Ingrediente',{
    descricao:{
        type:String,
        required:true
    }, 
})

module.exports = Ingrediente;