# Sistema de Agendamento de Banhos em Pet Shop 🐶

Este projeto é um sistema web completo para agendamento de banhos em pets, feito como atividade individual. Ele possui funcionalidades de cadastro e login com autenticação segura, agendamentos com upload de imagem, dashboard com estatísticas, entre outros recursos extras.

## 🔧 Tecnologias Utilizadas

### Front-end:
- HTML5
- CSS3
- JavaScript (Chart.js para gráficos)

### Back-end:
- Node.js
- Express.js

### Banco de Dados:
- MySQL
- MySQL Workbench

### Autenticação e Segurança:
- JWT (JSON Web Token)
- Bcrypt

### Upload de Imagens:
- Multer

## 🚀 Como Executar o Projeto

### Pré-requisitos:
- Node.js
- MySQL
- MySQL Workbench

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/sistema-agendamento-petshop.git
cd sistema-agendamento-petshop
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo `.env`
Crie um arquivo `.env` na raiz do projeto com os seguintes dados:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=petshop
JWT_SECRET=umasecretaforte
```

### 4. Importe o banco de dados
Importe o arquivo `banco_petshop.sql` no MySQL Workbench para criar a estrutura e tabelas necessárias.

### 5. Inicie o servidor
```bash
npm start
```

### 6. Acesse o sistema
Abra o navegador em: `http://localhost:3000`

## 📂 Estrutura do Projeto
```
petshop-agendamentos/
│
├── README.md
├── .gitignore
└── petshop-system/
    │
    ├── back-end/
    │   ├── controllers/
    │   │   └── agendamentoController.js
    │   │   └── authController.js
    │   │
    │   ├── middlewares/
    │   │   └── authMiddleware.js
    │   │
    │   ├── models/
    │   │   └── conexao.js
    │   │   └── agendamentoModel.js
    │   │   └── usuarioModel.js
    │   │
    │   ├── routes/
    │   │   └── agendamentoRoutes.js
    │   │   └── authRoutes.js
    │   │
    │   ├── uploads/
    │   │   └── [aqui ficam as imagens enviadas]
    │   │
    │   ├── .env
    │   ├── app.js
    │   ├── package.json
    │   └── banco_petshop.sql
    │
    └── front-end/
       ├── css/
       │   └── style.css
       │
       ├── js/
       │   └── script.js
       │   └── login.js
       │   └── dashboard.js
       │
       ├── imagens/
       │   └── [aqui você pode salvar imagens estáticas do site]
       │
       ├── index.html
       ├── login.html
       ├── dashboard.html
       └── agendamento.html
    
    

```

## ✅ Funcionalidades Principais
- Cadastro e login de usuários com criptografia
- Validação de senha e autenticação JWT
- Agendamento de banhos com:
  - Nome do pet
  - Raça
  - Data
  - Horário
  - Observações
  - Imagem
- CRUD completo de agendamentos
- Upload de imagem com visualização (preview)
- Dashboard com:
  - Total de agendamentos
  - Gráfico de raças

## ⭐ Funcionalidades Extras (Ponto adicional)
- Mostrar e esconder senha
- Restrições como horário duplicado não permitido
- Preview da imagem antes do upload
- Dashboard com estatísticas visuais

## 🖼 Prints do Projeto
### Login:
![Login](prints/login.png)

### Formulário de Agendamento:
![Agendamento](prints/formulario.png)

### Dashboard:
![Dashboard](prints/dashboard.png)

## 📦 Exportação do Banco
O arquivo `banco_petshop.sql` está incluído no projeto com a estrutura completa do banco de dados.

---

Se tiver qualquer dúvida, entre em contato ou abra uma issue no repositório. 🐾

---
**Desenvolvido por Luan Rocha da Silva - 2025**

