FROM node:lts-buster
LABEL authors="taiko90"

WORKDIR /code

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]