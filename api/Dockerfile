FROM node:14-slim

WORKDIR /app

COPY package*.json ./

COPY ./env_variables.env ./

RUN npm install

COPY ./dist/src ./

EXPOSE 3000

CMD ["npm", "start"]