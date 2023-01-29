FROM node:18.12.1-alpine

WORKDIR /opt/app/

COPY ./package.json /opt/app/package.json
COPY ./yarn.lock /opt/app/yarn.lock

RUN yarn install

COPY . /opt/app/

EXPOSE 3000