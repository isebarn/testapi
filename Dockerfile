FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
ENV MONGO 'mongodb://mongodb:27017'
# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
