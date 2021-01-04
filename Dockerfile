FROM node:15.5.0-alpine3.11
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#don't use regex like ./*/* ,it will copy all your files into the container folder but without keeping the subfolder structure
COPY ./ ./
EXPOSE 3000 
CMD [ "node" ,"index.js" ] 
