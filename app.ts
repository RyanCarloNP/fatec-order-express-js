import { Request, Response } from "express";

const express = require('express');

const app = express();

app.use(express.json());

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

app.get('/product/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    const brand = req.query.brand;
    const storageId = Number(req.query.storageId);

    const product = products.find((product) => {
        return product.id == id || product.name == name || product.brand == brand || product.storageId == storageId;
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
    const storageId = Number(req.query.storageId);

    const product = products.find((product) => {
        return product.id == id || product.storageId == storageId;

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

app.post('/product/:id', (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
    res.status(201).send();
})

app.put('/product/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const storageId = Number(req.query.storageId);
    const product = req.body;

    const index = products.findIndex((product) => {
        return product.id == id || product.storageId == storageId;
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
        document: "123.456.789-01",
        zipCode: "Rua das Flores, 248",
        phone: "(11) 12345-6789",
        email: "silvaMaria@gmail.com"
    }
];

app.get('/client/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    const document = req.query.document;
    const zipCode = req.query.zipCode;

    const client = clients.find((client) => {
        return client.id == id || client.name == name || client.document == document || client.zipCode == zipCode;
    });

    if (!client) {
        res.status(404).send();
        return;
    } else {
        res.status(200).json(client);
        return;
    };
});

app.get("/client", (req: Request, res: Response) => {
    res.status(200).json(clients);
});

app.post('/client/:id', (req: Request, res: Response) => {
    const client = req.body;
    clients.push(client);
    res.status(201).send();
})

app.put('/client/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    const document = req.query.document;
    const client = req.body;

    const index = clients.findIndex((client) => {
        return client.id == id || client.name == name || client.document == document;
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

app.delete('/client/:id', (req: Request, res: Response) => {
    const id = Number(req.query.id);
    const document = req.query.document;

    const client = clients.find((client) => {
        return client.id == id || client.document == document;
    });

    if (!client) {
        res.status(404).send();
        return;
    } else {
        clients.splice(clients.indexOf(client));
        res.status(204).send();
        return;
    };
})

const workers = [
    {
        id: 1,
        name: "Joaquim da Silva",
        document: "123.466.789-00",
        position: "Vendedor",
        workingHours: 8,
        salary: 1000,
        zipCode: "Rua dos Ventos, 1",
    },
    {
        id: 2,
        name: "Suzana De Capres",
        document: "124.456.789-01",
        position: "Vendedor",
        workingHours: 8,
        salary: 1000,
        zipCode: "Rua das Rochas, 123",
    }
];

app.get('/worker/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    const position = req.query.position;
    const workingHours = Number(req.query.workingHours);

    const worker = workers.find((worker) => {
        return worker.id == id || worker.name == name || worker.position == position || worker.workingHours == workingHours;
    });

    if (!worker) {
        res.status(404).send();
        return;
    } else {
        res.status(200).json(worker);
        return;
    };
});

app.get("/worker", (req: Request, res: Response) => {
    res.status(200).json(workers);
});

app.post('/worker/:id', (req: Request, res: Response) => {
    const worker = req.body;
    workers.push(worker);
    res.status(201).send();
});

app.put('/worker/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const name = req.query.name;
    const document = req.query.document;
    const worker = req.body;

    const index = workers.findIndex((worker) => {
        return worker.id == id || worker.name == name || worker.document == document;
    });

    if (index == -1) {
        res.status(404).send();
        return;
    } else {
        workers[index] = worker;
        res.status(204).send();
        return;
    };
});

app.delete('/worker/:id', (req: Request, res: Response) => {
    const id = Number(req.query.id);
    const name = req.query.name;
    const document = req.query.document;

    const worker = workers.find((worker) => {
        return worker.id == id || worker.name == name || worker.document == document;
    });

    if (!worker) {
        res.status(404).send();
        return;
    } else {
        workers.splice(workers.indexOf(worker));
        res.status(204).send();
        return;
    };
});

app.listen(3000, () => {
    console.log('Server is running in door 3000');
});
