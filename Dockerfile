FROM node:10.16.3-alpine

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install

COPY . /app/

CMD ["node", "server.js"]
