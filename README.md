# Blog Pessoal 

Um sistema completo de blog pessoal desenvolvido com Spring Boot (Backend) e React TypeScript (Frontend). O projeto permite gerenciamento de usuários, temas e postagens com autenticação e autorização.


# 🎯 Visão Geral

Temos aqui um blog pessoal que permite aos usuários criar, editar e gerenciar postagens organizadas por temas.

# O sistema inclui:

Sistema de autenticação com Spring Security;

CRUD completo para usuários, temas e postagens;

Interface responsiva com Material-UI;

Integração completa entre Frontend e Backend;

Documentação da API com Swagger;


# 🛠 Tecnologias Utilizadas

# **Backend**: 

Java 16

Spring Boot 2.5.6

Spring Security (Autenticação e Autorização)

Spring Data JPA (Persistência)

H2 Database (Desenvolvimento)

MySQL (Produção)

PostgreSQL (Produção alternativa)

Swagger (Documentação da API)

Maven (Gerenciamento de dependências)


# **Frontend**:

React 17.0.2

TypeScript 4.1.2

Material-UI 4.12.3

React Router Dom 5.3.0

Redux (Gerenciamento de estado)

Axios (HTTP Client)

React Toastify (Notificações)




# 📋** Pré-requisitos**

# **Para o Backend:**

Java JDK 16 ou superior

Maven 3.6+ ou usar o wrapper incluído (./mvnw)

MySQL 8.0+ (opcional, H2 configurado por padrão)


# **Para o Frontend:**

Node.js 14.0+

npm 6.0+ ou yarn 1.22+

# Ferramentas de Desenvolvimento:

IDE (IntelliJ IDEA, Eclipse, VS Code)

Git

Postman (opcional, para testar API)

# 📁 Estrutura do Projeto


<img width="576" height="549" alt="image" src="https://github.com/user-attachments/assets/46fdcbe9-8d13-468b-b2da-7c12d362682e" />


    
# 🚀 Configuração e Execução

# 1. Executando o Backend
# Opção 1: Usando Maven Wrapper (Recomendado)

 Navegue até a pasta do backend
 
~ cd BackEnd/desembalamenos

  Execute o projeto (Windows)
./mvnw.cmd spring-boot:run

  Execute o projeto (Linux/Mac)
./mvnw spring-boot:run


# Opção 2: Usando Maven Instalado

cd BackEnd/desembalamenos

mvn spring-boot:run


# Configuração de Banco de Dados
O projeto está configurado para usar H2 por padrão. Para alterar:

# Para MySQL: 

Edite application.properties e altere para:

spring.profiles.active=dev

Configure as credenciais em application-dev.properties

# Para PostgreSQL: spring.profiles.active=prod
Configure a variável de ambiente JDBC_DATASOURCE_URL

# Verificação do Backend

API Base URL: http://localhost:8080

Swagger UI: http://localhost:8080/swagger-ui/

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:testdb

Username: usuarioteste

Password: senhateste



# 2. Executando o Frontend:

 Navegue até a pasta do frontend: 
 
cd Frontend

 Instale as dependências: 
 
npm install ou yarn install

 Execute o projeto em modo desenvolvimento:
 
npm start ou yarn start



# 3. Verificação do Frontend

Aplicação: http://localhost:3000

Login padrão: Será necessário criar um usuário através da tela de cadastro

# 4. Executando Ambos Simultaneamente
   
# Terminal 1 (Backend):

cd BackEnd/desembalamenos

./mvnw spring-boot:run

# Terminal 2 (Frontend):

cd Frontend

npm start

# 📡 API Endpoints:

# Autenticação

POST /usuarios/cadastrar    -> Cadastrar usuário

POST /usuarios/logar        -> Login

# Usuários
GET    /usuarios/all         -> Listar todos usuários

GET    /usuarios/nome/{nome} -> Buscar por nome

PUT    /usuarios/atualizar  -> Atualizar usuário

# Temas

GET    /temas               -> Listar todos temas

GET    /temas/{id}          -> Buscar tema por ID

GET    /temas/descricao/{descricao} -> Buscar por descrição

POST   /temas               -> Criar tema

PUT    /temas               -> Atualizar tema

DELETE /temas/{id}          -> Deletar tema


# Postagens

GET    /postagens           -> Listar todas postagens

GET    /postagens/{id}      -> Buscar postagem por ID

GET    /postagens/titulo/{titulo} -> Buscar por título

POST   /postagens           -> Criar postagem

PUT    /postagens           -> Atualizar postagem

DELETE /postagens/{id}      -> Deletar postagem


# ⚡ Funcionalidades

# Autenticação e Autorização

✅ Cadastro de usuários com validação

✅ Login com geração de token

✅ Proteção de rotas

✅ Middleware de autenticação

# Gerenciamento de Conteúdo

✅ CRUD completo de postagens

✅ CRUD completo de temas

✅ Associação entre postagens e temas

✅ Busca por título/descrição

# Interface do Usuário

✅ Design responsivo com Material-UI

✅ Navegação intuitiva

✅ Notificações toast

✅ Modais para criação rápida

✅ Validação de formulários

# Recursos Técnicos
✅ Estado global com Redux

✅ Tipagem TypeScript

✅ Tratamento de erros

✅ Loading states

✅ Documentação da API
