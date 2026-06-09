# 🌱 Eco Monitor

## 📱 Sobre o Projeto

O Eco Monitor é um aplicativo mobile desenvolvido em React Native para monitoramento de sensores ambientais utilizados em propriedades agrícolas.

A aplicação foi criada como parte da Global Solution, com o objetivo de auxiliar no acompanhamento de sensores responsáveis pela coleta de dados ambientais, permitindo o gerenciamento completo dos dispositivos cadastrados.

O aplicativo está integrado a uma API REST desenvolvida em Java Spring Boot com banco de dados Oracle, realizando operações em tempo real através de requisições HTTP.

---

## 🎯 Objetivo da Solução

A solução busca facilitar o monitoramento ambiental em propriedades rurais através do gerenciamento de sensores responsáveis pela coleta de informações importantes para a agricultura.

Com o aplicativo é possível:

* Cadastrar sensores ambientais
* Consultar sensores cadastrados
* Atualizar informações dos sensores
* Remover sensores do sistema
* Visualizar o local associado a cada sensor

---

## 👥 Integrantes do Grupo

Aluno: Lucas Rafael Solimene / RM: 565194

Aluno: Samyr Couto Oliveira / RM: 565562

Aluno: Henrique Teixeira Cesar / RM: 563088

---

## 🎥 Vídeo de Demonstração

**Link do vídeo:**

https://www.youtube.com/shorts/6AjHFYb7YS4

---

## 🚀 Funcionalidades

### Autenticação

* Login de usuário
* Cadastro de usuário

### Dashboard

* Visualização de informações ambientais

### Gerenciamento de Sensores

* Cadastro de sensores
* Consulta de sensores
* Atualização de sensores
* Exclusão de sensores
* Associação de sensores a locais/fazendas

---

## 🛠 Tecnologias Utilizadas

### Front-end

* React Native
* Expo
* React Navigation
* Axios
* React Native Picker
* Expo Vector Icons

### Back-end

* Java
* Spring Boot
* Oracle Database
* Swagger

---

## 📂 Estrutura do Projeto

```text
Projeto
│
├── API
│   └── Projeto Java Spring Boot
│
├── GS-MOBILE
│   └── Projeto React Native
│
└── README.md
```

---

## 📡 Integração com API

A aplicação consome uma API REST desenvolvida na disciplina de Java.

Operações implementadas:

| Método | Endpoint               | Função           |
| ------ | ---------------------- | ---------------- |
| GET    | /sensor/todos          | Listar sensores  |
| POST   | /sensor/novo           | Criar sensor     |
| PUT    | /sensor/atualizar/{id} | Atualizar sensor |
| DELETE | /sensor/remover/{id}   | Excluir sensor   |

---

## 📱 Telas Desenvolvidas

* Login
* Cadastro
* Dashboard
* Lista de Sensores
* Cadastro de Sensor
* Edição de Sensor

---

## ▶️ Como Executar o Projeto

### 1. Executar a API Java

Abra o Prompt de Comando (CMD) e navegue até a pasta:

```bash
cd API
```

Execute o projeto Spring Boot:

```bash
mvnw spring-boot:run
```

Aguarde até que a API seja iniciada corretamente.

---

### 2. Executar o Aplicativo Mobile

Abra um novo terminal (Git Bash ou Terminal) e navegue até a pasta:

```bash
cd GS-MOBILE
```

Instale as dependências:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

---

## ⚠️ Observação Importante

O arquivo de configuração da API está utilizando:

```javascript
baseURL: "http://localhost:8083"
```

Portanto, a API Java deve estar em execução localmente na porta 8083 antes de iniciar o aplicativo.

---

## 📌 Global Solution

Projeto desenvolvido para a disciplina Mobile Application Development, integrando React Native com API Java Spring Boot para gerenciamento de sensores ambientais.
