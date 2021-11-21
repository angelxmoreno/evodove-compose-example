FROM node:12.16.1-alpine

WORKDIR /app

ENV EVODOVE_SERVER_PORT=45678
ENV EVODOVE_DATA_VOLUME=/app/data
ENV EVODOVE_WORKERS_COUNT ;
ENV EVODOVE_STORE_RESPONSE_MS ;
ENV EVODOVE_SECURE_KEY ;

COPY package.json ./package.json
COPY server.js ./server.js

RUN npm install

EXPOSE 45678

CMD [ "npm", "start" ]
