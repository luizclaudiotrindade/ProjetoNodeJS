const express = require("express");
//express metodo de acesso.
const app = express()

// caminho da requisição "/" , req e res = requiscao e resposta 
app.get("/", (req,res) =>{
 res.send("Funcionou mlk!")
})

//Porta de acesso ao servidor pelo navegador
app.listen(3001)