# Usar a imagem oficial do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código da aplicação, incluindo o diretório database
COPY . .

# Expor a porta que a aplicação vai rodar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "database/server.js"]
