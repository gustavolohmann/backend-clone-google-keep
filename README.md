# Backend Clone do Google Keep

Este projeto é uma implementação de backend de um aplicativo de anotações inspirado no Google Keep. Ele fornece APIs para autenticação de usuários e gerenciamento de notas.

## Funcionalidades

- **Autenticação de Usuários**: Funcionalidade de registro e login com autenticação baseada em JWT.
- **Gerenciamento de Notas**: Criar, ler, atualizar e excluir notas.
- **Segurança**: Inclui CORS e Helmet para comunicação segura da API.
- **Integração com Banco de Dados**: Utiliza MySQL para armazenamento de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o backend.
- **Express.js**: Framework web para construção de APIs.
- **MySQL**: Banco de dados relacional para armazenar dados de usuários e notas.
- **JWT**: JSON Web Tokens para autenticação segura.
- **bcrypt.js**: Para hashing de senhas.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **Helmet**: Para segurança de cabeçalhos HTTP.
- **CORS**: Para lidar com requisições de origens diferentes.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd backend-clone-google-keep

npm install

const db = mysql.createConnection({
    host: '<seu-host-do-banco>',
    user: '<seu-usuario-do-banco>',
    port: '<sua-porta-do-banco>',
    password: '<sua-senha-do-banco>',
    database: '<seu-nome-do-banco>',
});

JWT_SECRET=<sua-chave-secreta>


npm start

Endpoints da API
Rotas de Usuário
POST /user/register: Registrar um novo usuário.
POST /user/login: Fazer login de um usuário existente.
Rotas de Notas
POST /note: Criar uma nova nota.
GET /note/:id: Buscar uma nota pelo ID do usuário.
PUT /note/:id: Atualizar uma nota pelo ID.
DELETE /note/:id: Excluir uma nota pelo ID.

backend-clone-google-keep/
├── controllers/       # Lógica de negócios para as rotas
├── models/            # Consultas ao banco de dados
├── routes/            # Definições das rotas da API
├── [db.js](http://_vscodecontentref_/1)              # Conexão com o banco de dados
├── [server.js](http://_vscodecontentref_/2)          # Arquivo principal do servidor
├── .env               # Variáveis de ambiente
├── [package.json](http://_vscodecontentref_/3)       # Metadados do projeto e dependências
└── .gitignore         # Arquivos ignorados

