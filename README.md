# Easy Calculator API

## Requisitos para Execução

Para executar o projeto corretamente, é necessário garantir que as seguintes versões do Node.js e NPM estejam instaladas no ambiente:

-   **Node.js**: v20
-   **NPM**: v10

### Verificando as Versões Instaladas

Para verificar as versões instaladas do Node.js e NPM, execute os comandos abaixo no terminal:

```bash
node -v
npm -v
```

## Configuração de execução

Antes de rodar o projeto, criar um arquivo `.env` no diretorio `src/config/env` e dentro dele colocar o seguinte conteúdo ajustando as variaveis de acordo com seu ambiente local:

### Local

```

PORT=3000
API_BASE=/api

```

Rodando o Projeto:

```bash
# instalar dependências
$ npm install

# iniciar o servidor
$ npm run dev
```

## Testes

Antes de rodar os testes, criar um arquivo `.env.test` no diretorio `src/config/env` e dentro dele colocar o seguinte conteúdo ajustando as variaveis de acordo com seu ambiente local:

```
PORT=3000
API_BASE=/api
```

Os testes unitarios se encontram na pasta `src/__tests__/unit/services`.

Para rodar todos os unitarios, rodar o comando:

* Sistema Linux: `npm run test`
* Sistema Windows: `npm run test:w`

### Para acessar a documentação da api

-   Iniciar o servidor com o comando `npm run dev`
-   Acessar a seguinte URL [http://localhost:3000/api/api-docs](http://localhost:3000/api/api-docs)
    * OBS: caso estiver usando uma porta diferente, deve ser alterada na URL  
