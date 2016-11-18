
FROM node:latest

RUN apt-get update

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# PhantomJS
RUN \
  cd /tmp && \
  git clone https://github.com/edwinvdgraaf/phantomjs-build.git && \
  cd phantomjs-build && \
  cp bin/phantomjs /usr/local/bin/ && \
  cd /tmp && \
  rm -rf /tmp/phantomjs-build

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

