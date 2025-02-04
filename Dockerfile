# Usa uma imagem base do Node.js
FROM node:22

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta 5173
EXPOSE 5173

# Comando para rodar o projeto
CMD ["npm", "run", "dev", "--", "--host"]