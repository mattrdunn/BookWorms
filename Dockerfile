FROM node:current-alpine

RUN npm install --prefix ./client

RUN npm run build && npm run dev