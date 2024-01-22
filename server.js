const express = require("express");
const app = express();

app.listen(4000, function(erro) {
    if(erro) console.log("ocorreu um erro") 
    else console.log("servidor iniciado com sucesso")
});

app.put("/tech-challenge/pedidos/:idPedido/status/:status", (req, res) => {
    console.log(req);
    res.status(200).send(
        {
            "idPedido": req.params.idPedido,
            "idCliente": "7b0cffe8-a8dc-4d1c-8f41-560f83b441c6",
            "statusPedido": req.params.status,
            "valorPedido": 800,
            "dataInclusao": "2023-08-24T14:01:51.677+00:00",
            "dataAtualizacao": "2023-08-25T02:01:51.955+00:00"
        }
    );
});

app.put("/tech-challenge/pedidos/:idPedido/webhook", (req, res) => {
    console.log(req);
    res.status(200).send("Requisição recebida e processamento iniciado.");
});