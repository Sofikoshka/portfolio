FROM node:14 AS build

WORKDIR /app
COPY ./package.json ./
COPY ./ ./

RUN npm install && npm run build
FROM node:14 AS serve

WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]