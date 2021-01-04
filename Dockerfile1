FROM node:15.5.0-alpine3.11
WORKDIR /
CMD mkdir /chatRoomApp 
COPY ./*/* /chatRoomApp/
EXPOSE 3000 
ENTRYPOINT [ "node" ,"/chatRoomApp/index.js" ] 
