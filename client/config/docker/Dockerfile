FROM node:15.2.1-alpine
RUN mkdir -p /client.dt-money/src/
WORKDIR /client.dt-money/src/
COPY package.json /client.dt-money/
RUN yarn
COPY . /client.dt-money/src/
CMD ["yarn", "start"]
