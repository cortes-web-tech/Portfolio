FROM node:18-alpine as build

WORKDIR /app
COPY package*.json .

RUN rm -rf node_modules
RUN rm -rf build


RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build

RUN cd /app && \
    npm install --production
#    npm cache clean

EXPOSE 3000

WORKDIR /app
CMD ["node", "build/index.js"]