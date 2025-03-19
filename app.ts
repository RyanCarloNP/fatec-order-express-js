import { Request, Response } from "express";

//Importação da biblioteca express
const express = require('express');

//Criação da aplicação
const app = express();

//Configura a aplicação para receber Json no body das requisições
app.use(express.json());

//Criação de um Arrey
const products = [
    {
        id: 1,
        name: "Feijão Carioca",
        brand: "Broto Legal",
        barCode: "2983746564738290",
        suplier: "Rede de Distribuição Lida",
        storageId: 98,
        price: 8.79,
        weight: 1,
        measureUni: "kg"
    },
    {
        id: 2,
        name: "Arroz",
        brand: "Tio João",
        barCode: "019287364546372812",
        suplier: "Rede de Distribuição Lida",
        storageId: 65,
        price: 29.99,
        weight: 5,
        measureUni: "kg"
    }
];

//Define método HTTP get que responde np requisição
app.get('/product/:id', (req: Request, res: Response) => {
    //res.send('Hello Young Lady!');    //Envia uma resposta a requisição

    console.log(req.params.id)

    const product = products.find((product) => {
        return product.id == Number(req.params.id);
    });
    if (!product) {
        res.status(404).send();
        return;
    } else {
        res.status(200).json(product);
        return;
    };
});

app.get("/product", (req: Request, res: Response) => {
    res.status(200).json(products);
});

app.delete('/product/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = products.find((product) => {
        return product.id == id;
    });
    if (!product) {
        res.status(404).send();
        return;
    } else {
        products.splice(products.indexOf(product));
        res.status(204).send();
        return;
    };
})

/*
//Define método HTTP post que responde np requisição
app.post('/', (req, res) => {
    //Envia uma resposta a requisição
    res.send('Hello Young Lady, Again!');
})
*/

app.post('/product', (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
    res.status(201).send();
})

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server is running in door 3000');
});
