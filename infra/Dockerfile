FROM node:16.17-alpine AS DEVELOPMENT
WORKDIR /app
COPY host counter ./
WORKDIR /app/host
RUN yarn install
WORKDIR /app/counter
RUN yarn install
