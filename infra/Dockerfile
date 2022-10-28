FROM node:16.17-alpine AS DEVELOPMENT
WORKDIR /app
COPY host counter ./
WORKDIR /app/host
RUN yarn install
WORKDIR /app/counter
RUN yarn install
WORKDIR /app/host

FROM node:16.17-alpine AS DEVELOPMENT_2
WORKDIR /app
COPY host counter ./
WORKDIR /app/host
RUN yarn install
WORKDIR /app/counter
RUN yarn install
WORKDIR /app/counter