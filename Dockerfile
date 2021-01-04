FROM node:15.5.0-alpine3.11
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./*/* ./
EXPOSE 3000 
CMD [ "node" ,"index.js" ] 
