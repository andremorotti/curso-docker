# Projeto FastAPI + React com Docker

## Descrição
Este projeto consiste em um backend desenvolvido com FastAPI e um frontend utilizando React. Ambos os serviços são contêinerizados usando Docker para facilitar a implantação e execução.

---


## Configuração e Execução

### 1. Clonar o Repositório
```sh
git clone https://github.com/andremorotti/curso-docker.git
cd seu_repositorio
```

### 2. Configurar o Ambiente Virtual
```sh
python3 -m venv .venv
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate    # Windows
```

### 3. Instalar Dependências do Backend
```sh
cd backend/
pip install -r requirements.txt
```

### 4. Rodar o Backend
```sh
uvicorn main:app --reload
```
A API ficará disponível em:
[http://localhost:8000/api01/cards](http://localhost:8000/api01/cards)

### 5. Rodar o Frontend
Abrir um novo terminal e executar:
```sh
cd frontend/
npm install
npm start
```
O frontend ficará disponível em:
[http://localhost:3000](http://localhost:3000)

---

## Configuração com Docker

### Criar a Network Docker
```sh
docker network create rede_docker
```

### Construir e Rodar os Containers
```sh
cd backend/
docker build . -t backend
docker run --name backend --rm --network rede_docker -p 8000:8000 backend
```

```sh
cd frontend/
docker build . -t frontend
docker run --name frontend --rm --network rede_docker -p 3000:3000 frontend
```

---

