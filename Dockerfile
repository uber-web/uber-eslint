FROM node:8.9.0

WORKDIR /uber-eslint

COPY . .

COPY package.json /uber-eslint/

RUN yarn
