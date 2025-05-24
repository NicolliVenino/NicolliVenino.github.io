# 🍳 Recipedia

# Descrição do projeto
&nbsp; &nbsp; &nbsp; &nbsp;Desenvolvido durante o segundo módulo do curso de engenharia da computação do Instituto de Tecnologia e Liderança (Inteli), o projeto consiste em uma plataforma WEB que tem como objetivo facilitar e democratizar o acesso às receitas gastronômicas, de modo a concentrá-las em um único espaço digital que permite a criação de pastas e a troca de informações entre os usuários.

# Estrutura de pastas
&nbsp; &nbsp; &nbsp; &nbsp;Segue abaixo a estrutura de pastas do projeto.
```
Projeto_Inteli_Recipedia/
├─ mvc-boilerplate/   
├── assets/                # Arquivos públicos como imagens e fontes          
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── db.js
├── controllers/           # Lógica de controle das requisições
│   └── folder_recipeController.js
│   └── folderController.js
│   └── ingredientController.js
│   └── recipe_ingredientController.js
│   └── recipeController.js
│   └── userController.js
├── documents/             # Documentação do projeto - Web Application Document
|   └── WAD.md
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── folder_recipeModel.js
│   └── folderModel.js
│   └── ingredientModel.js
│   └── recipe_ingredientModel.js
│   └── recipeModel.js
│   └── userModel.js
├── node_modules/          # Pacotes do node 
├── routes/                # Definição das rotas do sistema
│   └── folder_recipeRoutes.js
│   └── folderRoutes.js
│   └── ingredientRoutes.js
│   └── recipe_ingredientRoutes.js
│   └── recipeRoutes.js
│   └── userRoutes.js
├── scripts                # Arquivos de JavaScript públicos
├── services/              # Serviços auxiliares do sistema
│   └── userService.js                            
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── views/                 # Templates e componentes visuais da aplicação
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── README.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints 
```

# Como executar o projeto localmente?
## Requisitos:
- Instalação do Node.js (v18+);
- Instalação do PostgreSQL (v15+);
- Instalação do Express (v4+);
- Instalação do dotenv (v10+);
- Instalação do Git.

## Instalação

1) Clone o projeto
```
git clone https://github.com/NicolliVenino/Projeto_Recipedia.git
```

2) Instale as dependências
```
npm install express ejs pg dotenv
```

3) Rode o seguinte código para iniciar o servidor
```
node server.js
```

# Como configurar o banco de dados?

1) Mude o nome do arquivo .env.example para .env
   
2) Coloque as informações do banco de dados no arquivo .env

```
DB_USER=
DB_HOST=
DB_DATABASE=
DB_PASSWORD=
DB_PORT=
DB_SSL=
PORT=
```

2) Rode o Banco de Dados
```
npm run init-db
```
## Como testar as APIs:

- Use Postman, Insomnia ou outra ferramenta similar;
- Teste os seguintes endpoints:

