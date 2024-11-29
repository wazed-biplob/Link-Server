FROM node:20

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

# VOLUME ["/app/logs"]

EXPOSE 5000

CMD ["npm", "run", "dev"]