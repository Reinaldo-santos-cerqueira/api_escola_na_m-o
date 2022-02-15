const mongoose = require('mongoose');

const Controller_produto_aluno = mongoose.model('Controller_produto_aluno',{

    produto_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Escola'
    },
    
    aluno_id:{
        type:mongoose.Types.ObjectId,
        required: true,
        ref:'Aluno'
    },
    
    block:{
        type:String,
        required:true,
        enum:['Bloqueado','Liberado'],
        default:'Liberado'
    }

})

module.exports = Controller_produto_aluno;