<p align="center">
  <h1 align="center">
    NG.CASH Teste João Paulo
  </h1>
</p>

## 💻 Tecnologias e Ferramentas

- Docker
- TypeScript
- Node.js + Express
- PostgreSQL + Prisma
- Rest API
- ReactJS
- JWT

---

## 👨🏻‍💻 Instalação Docker

```bash
$ git clone git@github.com:OliveiraaJP/Cash-Wallet.git

$ cd back/

$ docker-compose build

$ docker-compose up
```

 - Accesse em seu navegador o link localhost:80 ou 127.0.0.1:80

---
 
 ## 💁🏻‍♂️ Instalação Manual

```bash

$ git clone git@github.com:OliveiraaJP/Cash-Wallet.git

```
  - Acesse a pasta back/
  - Modifique o .env do diretório back-end alterando o DATABASE_URL para a url do seu PostgreSQL
  - Exemplo: postgres://UsuarioDoPostgre:SenhaDoPostgre@Hostname:5432/NomedoDataBase
  - Rode os comandos abaixo na pasta do back/

 ```bash
$ npm i

$ npm run prisma:all ou npx prisma migrate dev

$ npm run dev

```
 - Acesse a pasta front/ por outro terminal, sem parar a aplicação do back
 - Rode os comandos abaixo na pasta do front/
 
  ```bash
$ npm i

$ npm start
```
 
  - Abra seu navegador de internet e acesse localhost:3000

---

## 🚀 API:

```yml
POST /signup
    - Rota para cadastro de usuários
    - headers: {}
    - body: {
        "username": String - min 3 caracteres
        "password": "Exemplosenha2" - min 8 caracteres sendo min 1 número, 1 letra maiúscula e 1 letra minúscula
    }
```

```yml
POST /signin
    - Rota para realização de login
    - headers: {}
    - body: {
        "username": String - min 3 caracteres
        "password": "Exemplosenha2" - min 8 caracteres sendo min 1 número, 1 letra maiúscula e 1 letra minúscula
    }
```

```yml
GET /bank (autenticada)
    - Rota que retorna o balanço do usuário
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```

```yml
GET /bank/transactions (autenticada)
    - Rota que retorna as transação do usuário
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
    - query: {type: credit | debit} - filtra por transações de crédito ou débito
```

```yml
POST /bank/transactions (autenticada)
    - Rota que realiza as transações
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {
        "receiver": userName - string do usuário que vai receber o valor
        "amount": 50.60 - valor que o usuário vai receber 
    }
```
