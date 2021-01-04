FROM node:15.5.0-alpine3.11
WORKDIR /
COPY ./shell.sh /
CMD   ["/shell.sh"]
COPY ./*/* /chatRoomApp/
EXPOSE 3000 
ENTRYPOINT [ "node" ,"/chatRoomApp/index.js" ] 
