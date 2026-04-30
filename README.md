# 🔗 DevLink
### Gerencie e compartilhe seus links em um só lugar!

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

DevLink é uma aplicação web que permite criar e gerenciar sua página de links personalizada, com autenticação real via Firebase e **preview em tempo real** enquanto você monta seus links.

## 📸 Demonstração

<div align="center">
  <img src="./tela.png" alt="Preview do DevLink" width="900">
  <br>
  <em>Tela principal da aplicação com listagem de links</em>
</div>

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🔐 **Autenticação Firebase** | Cadastro e login com e-mail e senha, sessão persistente entre visitas |
| 🏠 **Página Home** | Visão geral de todos os links cadastrados pelo usuário logado |
| 🔗 **Criação de links** | Adicione links com nome, URL e cor de fundo customizável |
| 👁️ **Preview em tempo real** | Veja o card do link renderizado enquanto preenche o formulário |
| 🔔 **Notificações Toastify** | Feedback visual instantâneo para cada ação (sucesso, erro, alerta) |
| 🧭 **Rotas privadas** | Páginas protegidas que redirecionam para login caso não autenticado |
| 📱 **Design responsivo** | Interface adaptada para desktop e mobile com Tailwind CSS |

## 🔒 Rotas da aplicação

| Rota | Descrição | Acesso |
|------|-----------|--------|
| `/` | Página de login e cadastro | Público |
| `/home` | Home com listagem dos links do usuário | Privado |
| `/links` | Criar e gerenciar links | Privado |

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|------------|-----------|
| React | Interface de usuário |
| TypeScript | Tipagem estática e segurança no código |
| Tailwind CSS | Estilização com classes utilitárias |
| React Router DOM | Navegação entre páginas |
| Firebase Authentication | Autenticação de usuários |
| Cloud Firestore | Banco de dados para armazenar os links |
| React Toastify | Notificações customizadas |
| Vite | Build rápida e ambiente de desenvolvimento |

## 📦 Como executar o projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Uma conta no [Firebase](https://firebase.google.com/)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/devlink.git

# Acesse a pasta do projeto
cd devlink

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
```

### Configuração do Firebase

Acesse o [Firebase Console](https://console.firebase.google.com/), crie um projeto, ative o **Authentication** (e-mail/senha) e o **Firestore Database**.

Crie o arquivo `.env` na raiz do projeto com suas credenciais:

```env
VITE_API_KEY=sua_api_key
VITE_AUTH_DOMAIN=seu_auth_domain
VITE_PROJECT_ID=seu_project_id
VITE_STORAGE_BUCKET=seu_storage_bucket
VITE_MESSAGING_SENDER_ID=seu_sender_id
VITE_APP_ID=seu_app_id
```

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está no `.gitignore`.
