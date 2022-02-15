const mongoose = require('mongoose');

const Produto = mongoose.model('Produto',{

    escola_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },

    ingredientes_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Ingredientes'
    },

    nome:{
        type: String,
        required: true
    },

    industrializado:{
        type: String,
        required: true,
        enum:['SIM','NAO'] 
    },

    tipo:{
        type: String,
        required: true,
        enum:['Bebida','Comida']
    },
 
    marcas_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Marcas'
    },

});

module.exports = Produto;