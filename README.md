# fintech-sa
# backend-fintech-sa

<div align="center">

# SafeCash
### Sistema de Tesouraria Integrada

Plataforma Fullstack de gestão financeira desenvolvida com foco em segurança, rastreabilidade e integridade de dados.

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange)

</div>

---

# Sobre o Projeto

O **SafeCash** é um sistema de gestão financeira criado para simular o ambiente real de uma FinTech especializada em controle de fluxo de caixa e antecipação de recebíveis.

O projeto foi desenvolvido utilizando o ecossistema **JavaScript Fullstack**, aplicando conceitos modernos de arquitetura de software, APIs REST, rastreabilidade financeira e boas práticas de desenvolvimento.

A aplicação permite o gerenciamento de entradas e saídas financeiras com atualização de saldo em tempo real, garantindo integridade e confiabilidade dos dados.

---

# Objetivos

- Desenvolver uma aplicação Fullstack moderna
- Implementar um CRUD financeiro inteligente
- Garantir rastreabilidade de operações
- Aplicar boas práticas de Clean Code
- Simular um ambiente profissional de desenvolvimento
- Utilizar metodologias ágeis e versionamento Git

---

# Funcionalidades

## Gestão Financeira

- Cadastro de receitas
- Cadastro de despesas
- Atualização de transações
- Soft Delete de registros
- Dashboard financeiro
- Saldo atualizado em tempo real

---

## Backend

- API REST com Node.js
- Estrutura modular
- Validação de dados
- Tratamento de erros
- Organização em camadas
- Regras de negócio financeiras

---

## Frontend

- Interface responsiva
- Consumo da API REST
- Atualização dinâmica de dados
- Dashboard administrativo

---

# Regra de Ouro — Soft Delete

O sistema não realiza exclusão física de registros financeiros.

As transações são apenas marcadas como excluídas, garantindo:

- Auditoria
- Histórico
- Segurança
- Integridade financeira
- Rastreabilidade

---

# Tecnologias Utilizadas

## Backend

- Node.js
- Express.js
- JavaScript
- REST API

## Frontend

- React.js
- Axios
- HTML5
- CSS3

## Banco de Dados

- MySQL / PostgreSQL

## Ferramentas

- Git
- GitHub
- Postman
- VS Code
- Trello / GitHub Projects

---

# Estrutura do Projeto

```bash
backend-fintech-sa/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── middlewares/
│   └── database/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# Instalação

## Clone o repositório

```bash
git clone https://github.com/seu-usuario/backend-fintech-sa.git
```

---

## Acesse o projeto

```bash
cd backend-fintech-sa
```

---

## Instale as dependências

```bash
npm install
```

---

## Execute o servidor

```bash
npm start
```

Servidor disponível em:

```bash
http://localhost:3000
```

---

# Rotas da API

## Listar transações

```http
GET /transactions
```

---

## Criar transação

```http
POST /transactions
```

### Exemplo de Body

```json
{
  "descricao": "Pagamento de aluguel",
  "valor": 2000,
  "tipo": "saida"
}
```

---

## Atualizar transação

```http
PUT /transactions/:id
```

---

## Excluir transação (Soft Delete)

```http
DELETE /transactions/:id
```

---

# Metodologia

O projeto segue práticas de desenvolvimento ágil utilizando:

- Sprints
- Versionamento Git
- Commits semânticos
- Organização de tarefas
- Desenvolvimento colaborativo

---

# Boas Práticas Aplicadas

- Clean Code
- Arquitetura modular
- Separação de responsabilidades
- Código reutilizável
- Padronização de nomenclaturas
- Tratamento de exceções
- Organização escalável

---

# Justificativa da Stack

O ecossistema JavaScript foi escolhido devido à sua alta produtividade, integração multiplataforma e ampla adoção no mercado de tecnologia.

O Node.js proporciona excelente desempenho para APIs escaláveis, enquanto o React oferece interfaces modernas e responsivas para aplicações financeiras.

---

# Competências Desenvolvidas

## Hard Skills

- Desenvolvimento Fullstack
- APIs REST
- Banco de Dados
- Integração Frontend/Backend
- Segurança de Dados
- Git e GitHub

---

## Soft Skills

- Trabalho em equipe
- Resolução de problemas
- Gestão de tempo
- Comunicação técnica
- Organização
- Resiliência

---

# Status do Projeto

🚧 Em desenvolvimento
