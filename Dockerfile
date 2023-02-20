FROM node:lts-alpine
WORKDIR /usr/src/app
RUN apk add dumb-init
COPY . .
RUN npm install
RUN npm run build
CMD ["dumb-init", "npm", "start"]