const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://adminReinaldo:k5pizQYE15oT1S12@apiresp.03e6e.mongodb.net/escola_na_mao?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Conectado ao banco de dados MongoDB");
}).catch((err) => {
    console.log(err);
}) 