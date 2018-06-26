FROM node:8.11.2

WORKDIR /uber-eslint

COPY . .

COPY package.json /uber-eslint/

RUN yarn
