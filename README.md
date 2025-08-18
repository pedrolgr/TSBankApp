# 💳 TSBankApp

Um aplicativo de banco simples desenvolvido em **Node.js** e **TypeScript**.  
Atualmente apenas o backend está em desenvolvimento, e o frontend ainda não foi iniciado.  

## 🚀 Funcionalidades

- [x] Cadastro de usuário
- [ ] Login de usuário
- [X] Criação automática de conta vinculada ao usuário
- [ ] Transferências entre contas
- [ ] Autenticação JWT
- [ ] Testes automatizados
- [ ] Documentação da API (Swagger/OpenAPI)
- [ ] Frontend (React)
- [ ] Dockerização da aplicação

## 🏗️ Arquitetura

O projeto segue uma arquitetura organizada em **Models**, **Services**, **Repositories** e **Controllers**.

### Models principais
- **User** → Representa o usuário do sistema;
- **Account** → Conta bancária vinculada ao usuário;
- **Transaction** → Registro de transações entre contas.

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Express](https://expressjs.com/)  
- [TypeORM](https://typeorm.io/)  
- Banco de dados: **PostgreSQL**  

## 📦 Como rodar o projeto

1. Clone o repositório

   ```bash
   git clone https://github.com/pedrolgr/TSBankApp
   ```
2. Instale as dependências

   ```bash
   npm install
   ```
3. Configure o arquivo `.env`

   ```env
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   ```
4. Inicie o servidor

   ```bash
   npm run dev
   ```

---

⚡ **Autor:** [Pedro Rocha](https://github.com/pedrolgr47)

