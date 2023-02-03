FROM node:18.12.1-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Install latest npm
RUN npm i npm@latest -g

WORKDIR /opt/app

# Instal dependencies
COPY ./package.json /opt/app/package.json
COPY ./yarn.lock /opt/app/yarn.lock

RUN yarn install

# Copy app code
COPY . .

USER node