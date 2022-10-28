FROM node:16.17-alpine AS DEVELOPMENT
WORKDIR /app
COPY ./ ./
RUN yarn install

FROM node:16.17-alpine AS PRODUCTION
WORKDIR /app
COPY host counter ./

WORKDIR /app/counter
RUN yarn install

WORKDIR /app/host
RUN yarn install
RUN yarn build
CMD ["yarn", "build:start"]