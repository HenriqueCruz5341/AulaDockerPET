FROM node:12

WORKDIR /usr/app

COPY backend/package*.json ./

EXPOSE 3333

CMD npm install && npm start
