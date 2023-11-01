FROM node:18
WORKDIR /.
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "dist/main.js" ]