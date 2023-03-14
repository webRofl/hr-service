FROM node:16.16.0

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

COPY ./package.json /opt/app/package.json
COPY ./yarn.lock /opt/app/yarn.lock

RUN yarn install

COPY . .
