# shipping-api

API para buscar melhores opções de envio de mercadorias com base em uma API externa de consulta.

# Instalação

Faça o clone do repositório:

```sh
git clone https://github.com/Jvictor97/shipping-api.git
```

Instale as dependências executando:

```sh
npm install
```

# Execução

Para executar a aplicação e iniciar o servidor execute:

```sh
npm start
```

# Testes

Para executar os testes da aplicação utilize:

```sh
npm test
```

# Rotas Disponíveis

## GET /shipping/best-options

Retorna as melhores opções de envio ordenando por custo e tempo de entrega.

### Exemplo:

- Request:

```
GET http://localhost:3000/shipping/best-options
```

- Response: 

```json
[
  {
    "name": "Option 2",
    "type": "Custom",
    "cost": 10,
    "estimated_days": 2
  },
  {
    "name": "Option 3",
    "type": "Pickup",
    "cost": 10,
    "estimated_days": 3
  },
  {
    "name": "Option 1",
    "type": "Delivery",
    "cost": 10,
    "estimated_days": 5
  }
]
```

# Stack

Implementado com:
- Express
- Axios

# Contribuidores

Desenvolvido por: [João Souza](https://github.com/Jvictor97)

