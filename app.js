//Importação da biblioteca express
const express = require('express');

//Criação da aplicação
const app = express();

//Define método HTTP get que responde np requisição
app.get('/', (req, res) => {
    //Envia uma resposta a requisição
    res.send('Hello Young Lady!');
});

//Define método HTTP post que responde np requisição
app.post('/', (req, res) => {
    //Envia uma resposta a requisição
    res.send('Hello Young Lady, Again!');
})

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
