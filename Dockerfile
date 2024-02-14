# Use a imagem Node.js como base
FROM node:20-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências e o código fonte do NestJS para o contêiner
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src/

# Instale as dependências
RUN npm install -g @nestjs/cli
RUN npm install @nestjs/cli --save-dev
RUN npm install --production


# Exponha a porta do servidor do NestJS
EXPOSE 3000

# Defina o comando para iniciar o servidor NestJS
CMD ["npm", "run", "start:dev"]