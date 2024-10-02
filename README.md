<<<<<<< HEAD
# Sistema de Gerenciamento de Capivaras 🦫

Este projeto é uma aplicação web para gerenciar capivaras, permitindo que você adicione, edite, liste e remova informações sobre essas adoráveis criaturas. O projeto é dividido em duas partes principais: a **API (backend)**, que lida com as operações no banco de dados, e o **Frontend (capivara-app)**, que é a interface do usuário.
<br><br><br>

## 🌟 Funcionalidades Principais

- **Adicionar** uma capivara com nome, idade, peso, status de saúde, habitat, comportamento, dieta e observações.
- **Editar** os detalhes de uma capivara existente.
- **Listar** todas as capivaras registradas.
- **Remover** capivaras da lista.
- **Confirmações** para ações importantes.
<br><br><br>


## 🏗️ Estrutura do Projeto

```bash
Sistema-Gerenciamento-Capivara/
│
├── api/                     # Backend (Node.js + Express + MySQL)
│   ├── controllers/         # Lógica dos controladores para manipular dados
│   ├── database/            # Conexão ao banco de dados
│   ├── routes/              # Rotas da API
│   ├── Dockerfile           # Dockerfile para a API
│   └── docker-compose.yml   # Docker Compose para orquestração dos serviços (API + MySQL)
│
└── capivara-app/            # Frontend (React)
    ├── src/                 # Código-fonte do frontend
    └── package.json         # Dependências do frontend
```
<br><br>

## 📋 Requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v14 ou superior)
- **Docker**
- **Docker Compose**
<br><br><br>


## 🚀 Passo a Passo de Instalação e Execução

### 1. Clone o repositório
Clone o projeto para a sua máquina local usando o Git:
```bash
git clone https://github.com/usuario/sistema-gerenciamento-capivara.git
```
```bash
cd Sistema-Gerenciamento-Capivara
```
<br>

### 2. Configuração do Backend (API)
#### a) **Configurar as variáveis de ambiente**
Dentro do diretório **api/**, crie um arquivo **.env** com as seguintes variáveis de ambiente:
```bash
DB_HOST=mysql
DB_USER=<seu_usuario_mysql>
DB_PASSWORD=<sua_senha_mysql>
DB_NAME=<nome_do_banco_de_dados>
```
Essas variáveis de ambiente são usadas para configurar a conexão com o banco de dados MySQL.

#### b) Executar a API com Docker Compose
No diretório **api/**, execute o seguinte comando para levantar a API e o banco de dados MySQL:
```bash
docker-compose up --build
```
<br>

### 3. Configuração do Frontend (React)
Você pode executar o frontend de duas maneiras: usando Docker ou Node.js diretamente.

#### a) Executar com Docker
No diretório **capivara-app/**, execute o comando abaixo para buildar a imagem do Docker e iniciar a aplicação na porta **3000**:
```bash
docker build -t capivara-app .
```
```bash
docker run -p 3000:3000 capivara-app
```

#### b) Executar localmente com Node.js
1. No diretório capivara-app/, instale as dependências do projeto:
```bash
cd capivara-app
npm install
```
2. Execute a aplicação React em modo de desenvolvimento:
```bash
npm start
```
<br>

### 4. Acessar a aplicação
- Abra o navegador e acesse o frontend: http://localhost:3000.
- A API estará rodando no endpoint: http://localhost:5000.
Você poderá adicionar, editar e remover capivaras pela interface da aplicação.<br>
<br>

### 5. Testar a Aplicação
Após levantar a aplicação (frontend e backend), você poderá interagir com o sistema para gerenciar capivaras:

- Adicionar Capivara: Preencha o formulário e clique em "Adicionar".
- Editar Capivara: Clique no botão de "Editar" de uma capivara já existente e altere os dados.
- Remover Capivara: Utilize o botão de "Remover" para deletar uma capivara do sistema.
<br><br><br>

## 🌐 Tecnologias Utilizadas

### Backend:
- Node.js
- Express
- MySQL
- Docker (para containerização)
- Docker Compose (para orquestração)

### Frontend:
- React
- TailwindCSS (para estilização)
- React-Icons (para ícones)
- React-Loader-Spinner (para animações de carregamento)
- React-Transition-Group (para animações)
<br><br><br>

## 🤝 Contribuição
Sinta-se à vontade para abrir issues ou pull requests no repositório! Qualquer feedback ou sugestão é bem-vindo.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> capivara-app/master
