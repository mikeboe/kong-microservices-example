# Step 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /base
COPY ./node/package.json .
COPY ./node/package-lock.json .

RUN npm i

COPY ./node .

RUN npm run build 

EXPOSE 3000

ENTRYPOINT ["node", "dist/main.js"]