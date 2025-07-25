# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Recipedia

#### Autora: [Nicolli Venino Santana](https://www.linkedin.com/in/nicolli-venino-santana-b84341254/)

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O Recipedia é uma plataforma WEB de publicação, coleção e armazenamento de receitas gastronômicas que aspira facilitar e potencializar o acesso à gastronomia, tanto para chefs renomados quanto para qualquer usuário interessado em cozinhar. Nesse sentido, o objetivo do projeto é concentrar receitas publicadas para e pela comunidade de usuários amantes de culinária, sem necessidade de diploma, ou por chefs do mercado que desejam compartilhar experiências, assim como servir de portfólio para estudantes e formados em áreas relacionadas à cozinha, de modo que possam publicar suas ideias de pratos e trocar informações entre si.

Diante disso, para alcançar o escopo supracitado, o Recipedia contempla a funcionalidade de visualizar várias receitas na tela, sob as quais os usuários têm a liberdade de salvar em pastas personalizadas aquelas que melhor lhe agradar. Paralelamente, ao selecionar uma receita, o usuário tem acesso não só às informações de tempo de preparo e quantidade, mas também à opção de fazer anotações pessoais e inserir uma nota (variando de 1 a 5 estrelas). Dessa forma, a plataforma garante agradar usuários que não necessariamente possuem experiência profissional gastronômica, porém que, ainda assim, desejam exercer ou apreciar a culinária em suas vidas. 

Além disso, vale mencionar que o site abrange a função dos usuários criarem receitas autorais e publicá-las na plataforma. Essas receitas ficam salvas e visíveis no perfil do usuário, sujeitas a comentários e notas de toda a comunidade. Assim também, os usuários podem “seguir” os perfis uns dos outros e trocar informações por intermédio de um chat - no entanto, é imprescindível ressaltar que tal aplicação é opcional e o usuário tem liberdade de deixar seu perfil público (no qual suas pastas e receitas autorais são transparentes à toda comunidade) ou privado. Com isso, o Recipedia atua como um portfólio no qual universitários e profissionais do campo podem tornar seu trabalho público.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

<p align = "center">Figura 1: Primeira Persona</p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/bf8d2d45-86a6-4204-8f4d-e1d544dd6004" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025) - representação física da persona elaborada por inteligência artificial.</p> <br>

<p align = "center">Figura 2: Segunda Persona</p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/50ab3ff8-b9f3-4940-8364-955921aed8a0" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025) - representação física da persona elaborada por inteligência artificial.</p> <br>

### 2.2. User Stories (Semana 01 - opcional)

- <strong>US01</strong> - Eu, como amante de culinária, gostaria de salvar receitas em pastas organizadas e personalizadas de modo prático e rápido para tê-las sempre acessíveis e visíveis para mim, sem despender de muito tempo ou esforço para isso.

&nbsp; &nbsp; &nbsp; &nbsp;<strong>I:</strong> a ação que diz respeito ao usuário salvar receitas em pastas personalizadas é a mais fundamental funcionalidade do programa, de modo que é implementada sem dependência de derivações de outras user stories. <br></br>
&nbsp; &nbsp; &nbsp; &nbsp;<strong>N:</strong> a user storie supracitada é negociável, ou seja, o desejo de salvar as receitas em pastas totalmente personalizadas pode ser adaptada, se necessário, sem perder valor ao usuário. <br></br>
&nbsp; &nbsp; &nbsp; &nbsp;<strong>V:</strong> a user storie é valiosa, pois descreve, notoriamente, o impacto no cotidiano do usuário, destacando como será importante para suprir suas necessidades e amenizar suas dores. <br></br>
&nbsp; &nbsp; &nbsp; &nbsp;<strong>E:</strong> é possível elaborar estimativas a partir da user storie, pois o desejo do usuário foi bem específico. <br></br>
&nbsp; &nbsp; &nbsp; &nbsp;<strong>S:</strong> no que tange ao tamanho da funcionalidade descrita na user storie, pode-se afirmar que é possível executá-la dentro do prazo estabelecido e com os recursos dispostos. <br></br>
&nbsp; &nbsp; &nbsp; &nbsp;<strong>T:</strong> a user storie expressa clareza o suficiente para que seja possível validá-la por meio de testes.

- <strong>US02</strong> - Eu, como aspirador da carreira gastronômica, gostaria de publicar minhas próprias receitas na plataforma para dar visibilidade a elas, montando, assim, um portfólio no meu perfil.

- <strong>US03</strong> - Eu, como usuário, gostaria de ter a liberdade e a autonomia de tornar o meu perfil público ou privado para zelar pela minha privadicidade. 

- <strong>US04</strong> - Eu, como amante de culinária, gostaria de compartilhar receitas com outros usuários para trocarmos conhecimentos.

- <strong>US05</strong> - Eu, como amante de culinária, gostaria de anotar nas receitas as minhas experiências individuais com a preparação do prato para me lembrar, futuramente, de aspectos específico que eu achei necessário adicionar para mim mesmo. 

- <strong>US06</strong> - Eu, como indivíduo que almeja cozinhar algo novo, gostaria de filtrar as receitas de acordo com os ingredientes que tenho na minha casa para evitar gastar tempo lendo pratos que não vou conseguir fazer por escassez de recursos.
 
---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

#### 3.1.1. Modelagem Conceitual do banco de dados

<p align = "center">Figura 3: Modelagem Conceitual</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1eb20a13-89f2-4351-adbc-7f787df16891" alt="Modelagem Conceitual do Banco de Dados">
</p>

<p align = "center">Fonte: material produzido pela autora por intermédio do software DRAW.io (2025).</p> <br>

#### 3.1.2. Modelagem Relacional do banco de dados

<p align = "center">Figura 4: Modelagem Relacional</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a07065fd-71d8-409f-8720-6e0dec8b89a9" alt="Modelagem Relacional do Banco de Dados">
</p>

<p align = "center">Fonte: material produzido pela autora por intermédio do software drawSQL (2025).</p> <br>


### Explicação da Modelagem Conceitual e Relacional: 
&nbsp; &nbsp; &nbsp; &nbsp;No que tange às entidades (tabelas), é perceptível a diferença entre a modelagem conceitual e a modelagem relacional supracitada. Por isso, urge justificar essa disparidade por intermédio do conceito de normalização.

&nbsp; &nbsp; &nbsp; &nbsp;Em relação à modelagem relacional, esta encontra-se na primeira forma normal se - e somente se - cada atributo seu possuir um único valor, ou seja, as colunas não podem conter valores multivalorados ou valores compostos. Sob essa análise, nota-se que a figura 4 adiciona a tabela "ingredients", pois "ingredientes" em forma de atributo acarretaria o problema da ocorrência de valores multivalorados na tabela "recipes" - haja vista que uma receita contempla mais de um ingrediente. Com isso, a modelagem relacional passou para a primeira forma normal.   

&nbsp; &nbsp; &nbsp; &nbsp;No entanto, ainda foi necessário normalizar a modelagem relacional novamente, passando-a para a sua terceira forma normal (vale mencionar que não foi necessário normalizá-la para a segunda forma normal, pois esta já encontrava-se desse modo, sem haver demandas de mudanças para isso). Tal processo ocorre de maneira a eliminar atributos que podem ser obtidos pela equação de outros atributos, mitigando a dependência entre eles - exceto pela chave primária - e, assim, evitando a incoerência desses dados por falhas humanas. Com isso em mente, o atributo "total_time" foi excluído da entidade "recipes", pois é possível obtê-lo por intermédio da soma dos atributos "prep_time" e "cook_time".

&nbsp; &nbsp; &nbsp; &nbsp;Por último, cabe destacar que as tabelas "folders-recipes" e "recipes ingredients" foram criadas em função da cardinalidade N:N das entidades "folders" com "recipes" e das entidades "recipes" com "ingredients", respectivamente.

#### 3.1.3. Modelagem física com o Schema do banco de dados

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE user_formations  (
  id SERIAL PRIMARY KEY,
  id_user INT REFERENCES users(id) ON DELETE CASCADE,
  formation TEXT NOT NULL
);

CREATE TABLE folders (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  id_user INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  tipe TEXT NOT NULL,
  category TEXT NOT NULL,
  email TEXT NOT NULL,
  directions TEXT NOT NULL,
  prep_time INT,
  cook_time INT,
  servings INT,
  yield INT,
  score INT,
  author TEXT NOT NULL
);

CREATE TABLE folders_recipes  (
  id SERIAL PRIMARY KEY,
  id_folder INT REFERENCES folders(id) ON DELETE CASCADE,
  id_recipe INT REFERENCES recipes(id) ON DELETE CASCADE
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  specification TEXT NOT NULL
);

CREATE TABLE recipes_ingredients  (
  id SERIAL PRIMARY KEY,
  id_recipe INT REFERENCES recipes(id) ON DELETE CASCADE,
  id_ingredient INT REFERENCES ingredients(id) ON DELETE CASCADE
);

```
### 3.1.4 BD e Models (Semana 5)

Os Models implementados interagi diretamente com o banco de dados, de modo que define funções para manipular os dados da aplicação. 
Segue abaixo uma lista dos arquivos da pasta Models do projeto - os quais definem funções para listar, obter, criar e deletar:

- folder_recipeModel; 
- folderModel;
- ingredientModel;
- recipe_ingredientModel;
- recipeModel;
- userModel.

### 3.2. Arquitetura (Semana 5)

<p align = "center">Figura 5: Diagrama de Arquitetura
 
![modelagem_relacional](https://github.com/user-attachments/assets/c106fcf5-9745-43a7-a189-da7faf0b1805) 

<p align = "center">Fonte: material produzido pela autora por intermédio do software draw.io (2025).</p> <br>

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.https://github.com/user-attachments/assets/c106fcf5-9745-43a7-a189-da7faf0b1805
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

<p align = "center">Figura 5: Wireframe</p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/1d731a4f-7c37-4338-8219-e281c2f07217" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

Um endpoint configura-se como o "endereço de uma API" que possibilita a comunicação entre sistema e, dessa forma, permite que uma rede envie ou receba informações. Pode-se compreendê-lo como uma rota de API, a qual conecta URLs às funções dos controllers - para relizar ações como criar, obter, atualizar ou deletar.

Segue abaixo uma lista dos endpoints criados na pasta routes e uma breve descrição da sua funcionalidade:

Arquivo folder_recipeRoutes.js:
<ul>
 
<li> router.post('/recipeinfolder', Folder_RecipeController.adicionarReceita): endpoint para adicinar uma receita em uma pasta;

<li> router.get('/recipeinfolder', Folder_RecipeController.listarPastasReceitas): endpoint para listar receitas em pastas;

<li> router.get('/recipeinfolder/:id', Folder_RecipeController.obterPastaReceita): endpoint para obter receita em uma pasta;

<li> router.delete('/recipeinfolder/:id', Folder_RecipeController.deletarPastaReceita): endpoint para deletar receita em uma pasta.

</ul>

Arquivo folderRoutes.js:
<ul>
 
<li> router.get('/folders', FolderController.listarPastas): endpoint para listar todos as pastas;

<li> router.get('/folders/:id', FolderController.obterPasta): endpoint para obter uma pasta a partir do id;

<li> router.post('/folders', FolderController.criarPasta): endpoint para criar uma pasta;

<li> router.delete('/folders/:id', FolderController.deletarPasta): endpoint para deletar uma pasta.

</ul>

Arquivo ingredientRoutes.js:
<ul>
 
<li> router.get('/ingredients', IngredientController.listarIngredientes): endpoint para listar todos os ingredientes;

<li> router.get('/ingredients/:id', IngredientController.obterIngrediente): endpoint para obter um ingrediente a partir do id;

<li> router.post('/ingredients', IngredientController.criarIngrediente): endpoint para criar um ingrediente;

<li> router.delete('/ingredients/:id', IngredientController.deletarIngrediente): endpoint para deletar um ingrediente.

</ul>

Arquivo recipe_ingredientRoutes.js:
<ul>
 
<li> router.get('/ingredientinrecipe', Recipe_IngredientController.listar_ingrediente_da_receita): endpoint para listar ingredientes de uma receita;

<li> router.get('/ingredientinrecipe/:id', Recipe_IngredientController.obter_ingrediente_da_receita): endpoint para obter um ingrediente de uma receita;

<li> router.post('/ingredientinrecipe', Recipe_IngredientController.ingrediente_da_receita): endpoint para colocar um ingrediente em uma receita;

<li> router.delete('/ingredientinrecipe/:id', Recipe_IngredientController.deletar_ingrediente_da_receita): endpoint deletar um ingrediente de uma receita.

 </ul>
 
Arquivo recipeRoutes.js:
<ul>
 
<li> router.get('/recipes', RecipeController.listarReceitas): endpoint para listar todas as receitas;

<li> router.get('/recipes/:id', RecipeController.obterReceita): endpoint para obter uma receita a partir do id;

<li> router.post('/recipes', RecipeController.criarReceita): endpoint para criar uma receita;

<li> router.delete('/recipes/:id', RecipeController.deletarReceita): endpoint para deletar uma receita.

</ul>

Arquivo userRoutes.js:
<ul> 
 
<li> router.get('/users', UserController.listarUsuarios): endpoint para listar todos os usuários;

<li> router.get('/users/:id', UserController.obterUsuario): endpoint para obter um usuário a partir do id;

<li> router.post('/users', UserController.criarUsuario): endpoint para criar um usuário;

<li> router.delete('/users/:id', UserController.deletarUsuario): endpoint para deletar um usuário.

</ul>

Sob essa análise, no arquivo server.js foi definida as rotas das APIs da seguinte forma:
<ul>
<li> app.use('/api', folder_recipeRoutes); , no qual const folder_recipeRoutes = require('./routes/folder_recipeRoutes'); 
<li> app.use('/api', folderRoutes); , no qual const fol derRoutes = require('./routes/folderRoutes');
<li> app.use('/api', ingredientRoutes); , no qual const ingredientRoutes = require('./routes/ingredientRoutes');
<li> app.use('/api', recipe_ingredientRoutes); no qual: const recipe_ingredientRoutes = require('./routes/recipe_ingredientRoutes');
<li> app.use('/api', recipeRoutes); , no qual: const recipeRoutes = require('./routes/recipeRoutes');
<li> app.use('/api', userRoutes); , no qual: const userRoutes = require('./routes/userRoutes');
</ul>

de modo que temos:

- GET https://localhost:3000/recipeinfolder : para listar todas as relações entre receitas e pastas;

- GET https://localhost:3000/recipeinfolder/:id : para obter uma única relação entre receita e pasta;
  
- POST https://localhost:3000/recipeinfolder : para criar uma nova relação entre receita e pasta;

- DELETE https://localhost:3000/recipeinfolder/:id : para deletar uma relação entre receita e pasta;

- GET https://localhost:3000/folders : para listas todas as pastas;

- GET https://localhost:3000/folders/:id : para obter uma única pasta;

- POST https://localhost:3000/folders : para criar uma nova pasta;
  
- DELETE https://localhost:3000/folders/:id : para deletar uma pasta;

- GET https://localhost:3000/ingredients : para listar todos os ingredientes;

- GET https://localhost:3000/ingredients/:id : para obter um único ingrediente;

- POST https://localhost:3000/ingredients : para criar um novo ingrediente;
  
- DELETE https://localhost:3000/ingredients/:id : para deletar um ingrediente;
  
- GET https://localhost:3000/ingredientinrecipe : para listar todas as relações entre receitas e ingredientes;

- GET https://localhost:3000/ingredientinrecipe/:id : para obter uma única relação entre receita e ingrediente;

- POST https://localhost:3000/ingredientinrecipe : para criar uma nova relação entre receita e ingrediente;

- DELETE https://localhost:3000/ingredientinrecipe/:id : para deletar uma relação entre receita e ingrediente;
  
- GET https://localhost:3000/recipes : para listar todas as receitas;

- GET https://localhost:3000/recipes/:id : para obter uma única receita;

- POST https://localhost:3000/recipes : para criar uma nova receita;

- DELETE https://localhost:3000/recipes/:id : para deletar uma receita;

- GET https://localhost:3000/users : para listar todos os usuários;

- GET https://localhost:3000/users/:id : para obter um único usuário;
 
- POST https://localhost:3000/users : para criar um novo usuário;

- DELETE https://localhost:3000/users/:id : para deletar um usuário.

### 3.7 Interface e Navegação (Semana 07)

No que tange ao frontend do site, durante a Semana 7, foi desenvolvido uma página de login, um dashboard com a visualização de todas as receitas, uma página de “detalhe da receita”, sob a qual o usuário é redirecionado quando clica em uma receita, e uma página de perfil.

#### Página de Login
A página de login pede o nome do usuário e uma senha. Até o momento da Semana 7, só é possível acessar o site com o login estático pré-definido (username = admin e senha = 12345). Isso porque, em razão do prazo e da finalidade de teste, definir um login estático se tornou a opção mais adequada no cenário. No entanto, o próximo passo da aplicação é adicionar a funcionalidade de cadastro, de modo que a plataforma seja individualizada para cada usuário.

<p align = "center">Figura 6: Página de Login </p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/2b4215e3-3825-469b-983c-ee5d0f59c316" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

#### Página de Dashboard
Já a página de dashboard, por sua vez, contempla as receitas que o usuário pode acessar e salvar. 

<p align = "center">Figura 7: Página de Dashboard </p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/12cdea63-c5f2-408d-9488-cba71b053fbd" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

#### Página de Detalhe da Receita
Ao clicar em uma receita, o usuário é redirecionado para uma página de detalhe da receita, na qual ele pode visualizar os atributos prep_time, cook_time, amount, score, autor e o modo de preparo, assim como acessar o botão de salvar a receita em uma das suas pastas.

Além disso, é possível visualizar outras receitas por intermédio de duas colunas que estão posicionadas entre a receita clicada. Dessa forma, caso o usuário se interesse por outra receita de uma das colunas, ele pode clicar e ser redirecionado para essa receita.

<p align = "center">Figura 8: Página de Detalhe da Receita </p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/3b9dd8f3-cfdc-438b-ab2b-9aa8a885bc32" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

<p align = "center">Figura 9: Página de Detalhe da Receita </p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/e245e3c7-02e4-40c3-afc4-b463e08950b2" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

#### Página de Perfil
Por último, a página de perfil contempla as pastas que o usuário possui (é possível ver a preview de três receitas que uma pasta contempla, e é possível clicar na pasta e visualizar as receitas que ela contém. No entanto, o frontend da visualização das receitas dentro da pasta ainda serão melhor detalhes futuramente. 

<p align = "center">Figura 10: Página de Perfil </p>

<p align="center"> <img src = "https://github.com/user-attachments/assets/dbc2b81d-28d0-4d6f-9477-e189652bf299" align = "center"> </p>

<p align = "center">Fonte: material produzido pela autora (2025).</p> <br>

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)
#### Link do vídeo: 
https://drive.google.com/file/d/1xb_T3pQydFOKyji79mDPFbG0TwnNsYjH/view?usp=drive_link

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

Atualmente - após 4 Sprints - a plataforma contempla as funcionalidades que são, de fato, imprescindíveis no que tange ao escopo sob o qual o projeto foi designado. À exemplo disso, pode-se verificar a existência de um dashboard com receitas para o usuário salvar em suas pastas, uma página de detalhamento da receita que é possível verificar aspectos específicos de preparo quando a receita em questão é clicada e uma página de perfil, na qual o usuário pode visualizar suas pastas e rever as receitas que elas abrangem. Com isso, é possível mitigar as dores e abraçar as necessidades da primeira persona.

No entanto, é notório que a plataforma ainda não incorpora funções importantes - como a de visualização dos ingredientes e da opção de o usuário publicar sua própria receita - assim como é fato que existem melhorias tangentes ao visual e a usabilidade que devem ser implementadas. Nesse sentido, sobre o acesso aos ingredientes da receita, é válido mencionar que já existe no banco de dados uma tabela que relaciona as receitas e seus respectivos ingredientes, de modo que resta apenas conectá-la com o frontend da página de detalhes da receita. Já a respeito da funcionalidade do usuário criar e publicar receitas na plataforma, entende-se que esta deve ser a próxima prioridade do projeto, a qual será implementada dentro das próximas duas semanas (ainda antes de encerrar o módulo 2 da Instituição). Dessa forma, será possível também amenizar as angústias da segunda persona do projeto.

Além disso, é peremptório priorizar a página de cadastro, haja vista que, no cenário atual, só é possível acessar a plataforma por intermédio de um login pré-definido no código - o qual foi criado com fins exclusivamente de testes. Paralelamente, espera-se potencializar a experiência do usuário lapidando a estilização de todas as páginas e implementando, de maneira efetiva, o buscador de receitas - o qual ainda existe somente no frontend. 


---
