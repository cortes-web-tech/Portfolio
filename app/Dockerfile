FROM node:18-alpine as build

RUN mkdir /app && mkdir /app/data
COPY . /app
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build

COPY . .

RUN npm install
RUN npm run build

FROM node:18-alpine as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build

RUN cd /app && \
    npm install --production 
#    npm cache clean


EXPOSE 5000
EXPOSE 3000
WORKDIR /app
CMD ["npm", "run", "start"]