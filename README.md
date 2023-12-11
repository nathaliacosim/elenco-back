# Plano de Contas Contábeis

Este é um projeto para gerenciar um Plano de Contas Contábeis utilizando NestJS e MongoDB.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- MongoDB

### Instalação

1. Clone o repositório: `git clone https://github.com/nathaliacosim/elenco-back`
2. Acesse o diretório do projeto: `cd elenco-back`
3. Instale as dependências: `npm install` ou `yarn install`

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:

```env
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
```

### Uso
1. Inicie o servidor: 

   ```npm run start ou yarn start```

2. O servidor estará disponível em <http://localhost:3000> por padrão.

### Endpoints da API

- POST /contas
  
  ```Cria uma nova conta contábil.```

- GET /contas

   ```Obtém todas as contas contábeis.```

- GET /contas/:id

   ```Obtém uma conta contábil por ID.```

- PUT /contas/:id

   ```Atualiza uma conta contábil - existente.```

- DELETE /contas/:id

   ```Remove uma conta contábil por ID.```

- DELETE /contas

   ```Remove todas as contas contábeis.```

---
Desenvolvido com amor. ❤️