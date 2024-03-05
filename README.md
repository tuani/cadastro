# Cadastro de Usuários

Este é um projeto de exemplo que demonstra um formulário de cadastro de usuários utilizando HTML, JavaScript (Node.js) e um banco de dados MySQL.

### Pré-requisitos

- Node.js instalado
- MySQL instalado e configurado
- NPM (Node Package Manager)

### Instalação

1. Clone este repositório para o seu ambiente local.
2. Instale as dependências do projeto executando o seguinte comando no terminal na raiz do projeto:

   ```bash
   npm install
   ```
   

3. Certifique-se de ter o MySQL em execução em sua máquina local.

### Configuração do Banco de Dados

1. Certifique-se de ter criado um banco de dados MySQL para este projeto.
2. Abra o arquivo db.js e altere as configurações de conexão do banco de dados, se necessário.

### Executando a Aplicação

1. Após instalar as dependências e configurar o banco de dados, inicie a aplicação executando o seguinte comando:

   ```bash
   nodemon app.js
   ```

### Funcionalidades

- O formulário de cadastro valida os dados inseridos pelo usuário antes de enviar para o servidor.
- Os dados são enviados via requisição HTTP POST para o endpoint /cadastrar.
- Os dados do usuário são salvos no banco de dados MySQL.

### Dependências

#### Dependências de Produção:
- *cors* (^2.8.5): Middleware para habilitar o CORS (Cross-Origin Resource Sharing) em aplicativos Express.
- *express* (^4.18.2): Framework web para Node.js que facilita a criação de aplicativos da web e APIs.
- *mysql2* (^3.9.1): Cliente MySQL para Node.js, necessário para interagir com o banco de dados MySQL.
- *sequelize* (^6.37.1): ORM (Object-Relational Mapping) para Node.js, utilizado para facilitar a comunicação com o banco de dados relacional.

#### Dependências de Desenvolvimento:
- *nodemon* (^3.1.0): Ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor Node.js durante o desenvolvimento.
