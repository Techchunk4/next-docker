FROM node:latest

WORKDIR /app

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start"]