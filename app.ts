import { Request, Response } from "express";

//Importa o express
const express = require('express');

//Criação da aplicação
const app = express();

//Configura a aplicação para receber Json no body das requisições
app.use(express.json());

//Criação de um Arrey de Produtos
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

//Retornar um produto (GET)
app.get('/product/:id', (req: Request, res: Response) => {
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

//Retorna todos os produtos pela List (GET)
app.get("/product", (req: Request, res: Response) => {
    res.status(200).json(products);
});

//Deleta um produto (DEL)
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

//Criação de um novo produto (POST)
app.post('/product/:id', (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
    res.status(201).send();
})

//Atualiza um produto (PUT)
app.put('/product/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = req.body;
    const index = products.findIndex((product) => {
        return product.id == id;
    });
    if (index == -1) {
        res.status(404).send();
        return;
    } else {
        products[index] = product;
        res.status(204).send();
        return;
    };
})

//Criação de um Arrey de Clientes
const clients = [
    {
        id: 1,
        name: "João da Silva",
        document: "123.456.789-00",
        zipCode: "Rua das Flores, 123",
        phone: "(11) 99999-9999",
        email: "silvaJoao@gmail.com"
    },
    {
        id: 2,
        name: "Maria da Silva",
        document: "123.456.789-00",
        zipCode: "Rua das Flores, 248",
        phone: "(11) 99999-9999",
        email: "silvaMaria@gmail.com"
    }
];

//Retorna um cliente (GET)
app.get('/client/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const client = clients.find((client) => {
        return client.id == id;
    });
    if (!client) {
        res.status(404).send();
        return;
    } else {
        res.status(200).json(client);
        return;
    };
});

//Retorna todos os clientes pela List (GET)
app.get("/client", (req: Request, res: Response) => {
    res.status(200).json(clients);
});

//Criação de um novo cliente (POST)
app.post('/client/:id', (req: Request, res: Response) => {
    const client = req.body;
    clients.push(client);
    res.status(201).send();
})

//Atualiza um cliente (PUT)
app.put('/client/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const client = req.body;
    const index = clients.findIndex((client) => {
        return client.id == id;
    });
    if (index == -1) {
        res.status(404).send();
        return;
    } else {
        clients[index] = client;
        res.status(204).send();
        return;
    };
})

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server is running in door 3000');
});
