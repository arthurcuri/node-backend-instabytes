# Instabytes - Node Backend Project
_deployed on Google Cloud_

Instabytes é uma aplicação backend construída em **Node.js** que permite o upload e gerenciamento de posts com imagens, além de gerar descrições automáticas para as imagens utilizando a integração com o **Google Gemini**. O projeto está hospedado na nuvem e está acessível pela rota:

**[https://node-gemini-instabytes-1-914386334214.southamerica-east1.run.app](https://node-gemini-instabytes-1-914386334214.southamerica-east1.run.app)**

## Funcionalidades

1. **Postagens**:
   - Visualização de todas as postagens existentes.
   - Criação de novas postagens com texto e imagem.
   - Atualização de postagens com novas imagens ou descrições.

2. **Integração com Google Gemini**:
   - Quando uma imagem é carregada, o sistema utiliza a API do **Google Gemini** para gerar uma descrição automática da imagem em **português do Brasil**. A descrição gerada é adicionada à postagem.

3. **Upload de Imagens**:
   - O sistema suporta o upload de imagens em formato PNG, que são armazenadas no servidor.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construir a API.
- **Multer**: Middleware para gerenciamento de uploads de arquivos.
- **MongoDB**: Banco de dados NoSQL para armazenamento de posts.
- **Google Gemini**: API de inteligência artificial para gerar descrições automáticas para as imagens.

## Endpoints

A API oferece os seguintes endpoints:

- **GET /posts**: Retorna todas as postagens existentes.
- **POST /posts**: Cria uma nova postagem.
- **POST /upload**: Realiza o upload de uma imagem para a postagem.
- **PUT /upload/:id**: Atualiza uma postagem existente com uma nova imagem e descrição gerada pelo Google Gemini.

## Como Rodar o Projeto Localmente

### Requisitos

- Node.js instalado (recomenda-se a versão 16 ou superior).
- MongoDB configurado e em execução (ou usar um serviço de banco de dados em nuvem).
- Chave de API do Google Gemini configurada no arquivo `.env`.
